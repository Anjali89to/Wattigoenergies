import Inverter from '../models/Inverter.js';
import cloudinary from '../config/cloudinary.js';

export const uploadInverter = async (req, res) => {
  try {
    const { title, description, size } = req.body;
    const files = req.files;

    if (!files || Object.keys(files).length !== 4) {
      return res.status(400).json({ message: 'All 4 images are required (image1–image4)' });
    }

    const imageUrls = [];

    // multer-storage-cloudinary already uploads to cloudinary, so just get URLs
    for (let i = 1; i <= 4; i++) {
      const file = files[`image${i}`][0];
      imageUrls.push(file.path); // ✅ This is already Cloudinary secure_url
    }

    const inverter = new Inverter({
      title,
      description,
      size,
      images: imageUrls,
    });

    await inverter.save();

    res.status(201).json({ message: 'Uploaded successfully', data: inverter });
  } catch (error) {
    res.status(500).json({ message: 'Upload failed', error });
  }
};

export const getAllInverters = async (req, res) => {
  try {
    const inverters = await Inverter.find().sort({ createdAt: -1 });
    res.status(200).json(inverters);
  } catch (error) {
    res.status(500).json({ message: 'Fetch failed', error });
  }
};

export const getInverterById = async (req, res) => {
  try {
    const inverter = await Inverter.findById(req.params.id);
    if (!inverter) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(inverter);
  } catch (error) {
    res.status(500).json({ message: 'Fetch failed', error });
  }
};

export const deleteInverter = async (req, res) => {
  try {
    const inverter = await Inverter.findById(req.params.id);
    if (!inverter) return res.status(404).json({ message: 'Not found' });

    for (let url of inverter.images) {
      // Extract public_id from URL
      const parts = url.split('/');
      const filename = parts[parts.length - 1];
      const publicId = filename.split('.')[0];
      await cloudinary.uploader.destroy(`SolarInverter/${publicId}`);
    }

    await inverter.deleteOne();
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Delete failed', error });
  }
};
