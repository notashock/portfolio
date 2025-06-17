import Experience from '../models/ExpModel.js';

// @desc    Get all experiences
// @route   GET /api/experience
export const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get a single experience by ID
// @route   GET /api/experience/:id
export const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a new experience
// @route   POST /api/experience
export const createExperience = async (req, res) => {
  try {
    const newExp = new Experience(req.body);
    const savedExp = await newExp.save();
    res.status(201).json(savedExp);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create experience', error });
  }
};
