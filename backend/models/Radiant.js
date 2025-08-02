import mongoose from 'mongoose';

const RadiantSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
  images: { type: [String], required: true, validate: v => v.length === 3 },
}, { timestamps: true });

const Radiant = mongoose.model('Radiant', RadiantSchema);

export default Radiant;
