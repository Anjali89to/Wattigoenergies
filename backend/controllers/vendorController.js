import Vendor from '../models/Vendor.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const registerVendor = async (req, res) => {
  try {
    const { fullName, email, phone, address, state, pinCode, password } = req.body;

    const existing = await Vendor.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newVendor = new Vendor({
      fullName,
      email,
      phone,
      address,
      state,
      pinCode,
      password: hashedPassword
    });

    await newVendor.save();
    res.status(201).json({ message: 'Vendor registered, wait for admin approval' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginVendor = async (req, res) => {
  try {
    const { email, password } = req.body;

    const vendor = await Vendor.findOne({ email });
    if (!vendor) return res.status(404).json({ error: 'Vendor not found' });

    if (!vendor.isApproved)
      return res.status(403).json({ error: 'Vendor not approved by admin yet' });

    const isMatch = await bcrypt.compare(password, vendor.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid password' });

    const token = jwt.sign({ id: vendor._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
