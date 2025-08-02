import mongoose from 'mongoose';

const batterySchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

export default mongoose.model('Battery', batterySchema);
