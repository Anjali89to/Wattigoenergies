import mongoose from 'mongoose';

const inverterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  size: {
    type: String,
    enum: ['Small', 'Medium'],
    required: true
  },
  images: [String]
}, { timestamps: true });

const Inverter = mongoose.model('Inverter', inverterSchema);
export default Inverter;
