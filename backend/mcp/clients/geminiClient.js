// backend/mcp/clients/geminiClient.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

// Load API key from .env
if (!process.env.GEMINI_API_KEY) {
  throw new Error("❌ Missing GEMINI_API_KEY in .env file");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Choose model (use "gemini-2.0-flash" for speed, or "gemini-pro" for reasoning)
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

/**
 * Generate AI response from Gemini
 * @param {string} prompt - The input text
 * @param {object|null} context - Optional DB results or extra info
 * @returns {Promise<string>} - Generated response text
 */
export async function generateResponse(prompt, context = null) {
  try {
    let fullPrompt = prompt;

    if (context) {
      fullPrompt += `\n\nRelevant data from database:\n${JSON.stringify(context, null, 2)}\n\n`;
      fullPrompt += `Please use this data to generate a natural, helpful response.`;
    }

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: fullPrompt }] }],
    });

    // Some responses may come back structured, so check properly
    const textResponse = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text 
                      || result?.response?.text()
                      || "⚠️ No response generated.";

    return textResponse.trim();
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate response from Gemini.");
  }
}

/**
 * Special helper for classification / planning
 * This forces Gemini to return a **single word decision**
 */
export async function classifyPrompt(prompt) {
  const instruction = `
    You are a classifier. Read the user request and respond with ONLY one word:
    "projects", "skills", "experience", or "general".
    Do not add anything else.

    User request: "${prompt}"
  `;

  const result = await generateResponse(instruction);
  return result.toLowerCase().trim();
}
