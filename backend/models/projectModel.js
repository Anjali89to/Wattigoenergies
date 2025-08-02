import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true }, // Cloudinary image URL
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;
