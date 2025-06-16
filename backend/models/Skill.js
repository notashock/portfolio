import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    summary: { type: String },
    description: { type: [String] },
    source: { type: String },
    confidence: { type: String },
    tags: { type: [String] },
  },
  {
    timestamps: true,
  }
);

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;
