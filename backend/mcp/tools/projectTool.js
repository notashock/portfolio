// backend/mcp/tools/projectTool.js
import Project from '../../models/Project.js';

class ProjectTool {
  async execute(action, params) {
    switch (action) {
      case 'getAll':
        return await Project.find({});
      case 'getById':
        if (!params.id) throw new Error("id is required");
        return await Project.findById(params.id);
      case 'create':
        return await Project.create(params);
      default:
        throw new Error(`Unknown action: ${action}`);
    }
  }
}

export default ProjectTool;
