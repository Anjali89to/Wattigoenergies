import mongoose from 'mongoose';

const catinverterSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

export default mongoose.model('Catinverter', catinverterSchema);
