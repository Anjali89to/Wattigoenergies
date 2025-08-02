import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  phone: String,
  address: String,
  state: String,
  pinCode: String,
  password: String,
  isApproved: { type: Boolean, default: false }
});

const Vendor = mongoose.model('Vendor', vendorSchema);
export default Vendor;
