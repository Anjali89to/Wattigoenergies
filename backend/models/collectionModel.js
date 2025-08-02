import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image1: String,
  image2: String,
  image3: String,
  image4: String,
}, { timestamps: true });

const Collection = mongoose.model('Collection', collectionSchema);
export default Collection;
