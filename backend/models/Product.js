import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  size: String,
  price: Number,
  images: [String],
});

export default mongoose.model('Product', productSchema);
