import Vendor from '../models/Vendor.js';

export const getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find({ isApproved: false });
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const approveVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) return res.status(404).json({ error: 'Vendor not found' });

    vendor.isApproved = true;
    await vendor.save();

    res.json({ message: 'Vendor approved' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
