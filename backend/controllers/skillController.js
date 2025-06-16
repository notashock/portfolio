import Skill from '../models/skill.js';

// @desc    Get all skills
// @route   GET /api/skills
export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find({});
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch skills' });
  }
};

// @desc    Get a single skill by ID
// @route   GET /api/skills/:id
export const getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json(skill);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch skill' });
  }
};

// @desc    Create a new skill
// @route   POST /api/skills
export const createSkill = async (req, res) => {
  try {
    const { title, subtitle, summary, description, source, confidence, tags } = req.body;

    const newSkill = new Skill({
      title,
      subtitle,
      summary,
      description,
      source,
      confidence,
      tags,
    });

    const savedSkill = await newSkill.save();
    res.status(201).json(savedSkill);
  } catch (error) {
    res.status(400).json({ message: 'Invalid skill data', error: error.message });
  }
};
