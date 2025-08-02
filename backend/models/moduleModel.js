import mongoose from 'mongoose';

const moduleSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

const ModuleProduct = mongoose.model('ModuleProduct', moduleSchema);
export default ModuleProduct;
