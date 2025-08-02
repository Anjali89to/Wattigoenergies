import mongoose from 'mongoose';

const solarInverterSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  image1: String,
  image2: String,
  image3: String,
});

const SolarInverter = mongoose.model('SolarInverter', solarInverterSchema);

export default SolarInverter;
