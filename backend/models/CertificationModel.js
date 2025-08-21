import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  date: { type: String, required: true },
  expiry: { type: String, default: null }, // Optional expiry date
  link: { type: String },
});

export default mongoose.model("Certification", certificationSchema);
