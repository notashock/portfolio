// backend/mcp/tools/skillTool.js
import Skill from '../../models/Skill.js';

class SkillTool {
  async execute(action, params) {
    switch (action) {
      case 'getAll':
        return await Skill.find({});
      case 'getById':
        if (!params.id) throw new Error("id is required");
        return await Skill.findById(params.id);
      case 'create':
        return await Skill.create(params);
      default:
        throw new Error(`Unknown action: ${action}`);
    }
  }
}

export default SkillTool;
