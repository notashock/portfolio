import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    duration: {
      type: String, // You can use more structured startDate/endDate if needed
      required: true,
    },
    location: {
      type: String,
      default: 'Remote',
    },
    contributions: {
      type: [String], // List of bullet-point-like descriptions
      required: true,
    },
    technologies: {
      type: [String],
    },
    summary: {
      type: String,
    },
    description: {
      type: [String], // Optional detailed paragraphs
    },
    links: {
      type: [String], // Optional relevant URLs (e.g., company site, project links)
    },
  },
  {
    timestamps: true,
  }
);

const Experience = mongoose.model('Experience', experienceSchema);

export default Experience;
