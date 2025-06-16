import express from 'express';
import {
  getAllSkills,
  getSkillById,
  createSkill,
} from '../controllers/skillController.js';

const router = express.Router();

// GET all skills
router.get('/', getAllSkills);

// GET a single skill by ID
router.get('/:id', getSkillById);

// POST a new skill
router.post('/', createSkill);

export default router;
