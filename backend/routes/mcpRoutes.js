// routes/mcpRoutes.js
import express from "express";
import skillsTool from "../mcp/tools/skillTool.js";
import projectsTool from "../mcp/tools/projectTool.js";
import experienceTool from "../mcp/tools/experienceTool.js";
import GeminiTool from "../mcp/tools/GeminiTool.js"; // class

const router = express.Router();

// instantiate GeminiTool
const geminiTool = new GeminiTool();

// tools registry
const tools = {
  skills: skillsTool,
  projects: projectsTool,
  experience: experienceTool,
  gemini: geminiTool, // ✅ use the INSTANCE, not the class
};

router.post("/", async (req, res) => {
  try {
    const { tool, action, params } = req.body;

    if (!tools[tool]) {
      return res.status(400).json({ success: false, error: `Unknown tool: ${tool}` });
    }

    const selectedTool = tools[tool];

    let result;
    if (tool === "gemini") {
      // 🔹 GeminiTool handles multi-step flow internally
      result = await selectedTool.handleAction(action, params);
    } else {
      if (!selectedTool.actions[action]) {
        return res.status(400).json({ success: false, error: `Unknown action: ${action}` });
      }
      result = await selectedTool.actions[action](params);
    }

    res.json({ success: true, data: result });
  } catch (err) {
    console.error("❌ MCP Route Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
