import mongoose from 'mongoose';

const radiantSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  size: String,
  images: [String],
}, { timestamps: true });

export default mongoose.model('Radiant', radiantSchema);
