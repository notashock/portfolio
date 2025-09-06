// backend/mcp/tools/geminiTool.js
import { generateResponse } from "../clients/geminiClient.js";

// ✅ Use tools instead of raw models
import ProjectTool from "./projectTool.js";
import SkillTool from "./skillTool.js";
import ExperienceTool from "./experienceTool.js";

export default class GeminiTool {
  constructor() {
    this.name = "gemini";

    // Instantiate tools
    this.projectTool = new ProjectTool();
    this.skillTool = new SkillTool();
    this.experienceTool = new ExperienceTool();
  }

  async handleAction(action, params) {
    switch (action) {
      case "chat":
        return await this.chat(params);
      default:
        throw new Error(`Unknown action: ${action}`);
    }
  }

  /**
   * Generate contextual response from Gemini AI
   * Flow: User prompt → Gemini decides what info is needed → Tool fetches DB → Final Gemini response
   * @param {object} params - { prompt: string }
   * @returns {Promise<{response: string}>}
   */
  async chat(params) {
    console.log("GeminiTool chat called with params:", params);

    if (!params?.prompt) {
      throw new Error("Missing 'prompt' in request.");
    }

    const userPrompt = params.prompt;

    // Step 1: Ask Gemini what info is needed
    const planningPrompt = `
      You are an AI planner. Analyze the following user prompt and decide which type of information is needed.
      Options: ["projects", "skills", "experience", "general"].
      Respond ONLY with one word: projects, skills, experience, or general.

      User prompt: "${userPrompt}"
    `;

    const plannerDecision = await generateResponse(planningPrompt);
    console.log("Planner decision:", plannerDecision);

    let dbData = null;

    // Step 2: Fetch relevant data via tools
    if (plannerDecision.toLowerCase().includes("project")) {
      dbData = await this.projectTool.execute("getAll", {});
    } else if (plannerDecision.toLowerCase().includes("skill")) {
      dbData = await this.skillTool.execute("getAll", {});
    } else if (plannerDecision.toLowerCase().includes("experience")) {
      dbData = await this.experienceTool.execute("getAll", {});
    }

    // Step 3: Generate final contextual response
    const finalPrompt = dbData
      ? `User asked: "${userPrompt}". 
         Here is the relevant data from database: ${JSON.stringify(dbData, null, 2)}. 
         Please generate a helpful, natural response for the user.`
      : `User asked: "${userPrompt}". Please generate a response.`;

    const response = await generateResponse(finalPrompt);

    return { response, plannerDecision, dbData };
  }
}
