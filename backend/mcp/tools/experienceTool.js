// backend/mcp/tools/experienceTool.js
import Experience from '../../models/ExpModel.js';

class ExperienceTool {
  async execute(action, params) {
    switch (action) {
      case 'getAll':
        return await Experience.find({});
      case 'getById':
        if (!params.id) throw new Error("id is required");
        return await Experience.findById(params.id);
      case 'create':
        return await Experience.create(params);
      default:
        throw new Error(`Unknown action: ${action}`);
    }
  }
}

export default ExperienceTool;
