import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  summary: String,
  description: [String],
  links: [{ label: String, url: String }],
  source: String,
  confidence: String
});

export default mongoose.model('Project', projectSchema);
