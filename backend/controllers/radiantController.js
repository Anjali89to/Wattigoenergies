import Radiant from '../models/radiantModel.js';
// ✅ CORRECT (points to config folder)
import cloudinary from '../config/cloudinary.js';
import fs from 'fs';

export const createRadiant = async (req, res) => {
  try {
    const { title, description, price, size } = req.body;
    const files = req.files;

    const uploads = await Promise.all(
      files.map((file) => cloudinary.uploader.upload(file.path, { folder: 'radiant' }))
    );

    const imageUrls = uploads.map((img) => img.secure_url);

    files.forEach((file) => fs.unlinkSync(file.path));

    const newProduct = await Radiant.create({
      title,
      description,
      price,
      size,
      images: imageUrls,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Create failed', error });
  }
};

export const updateRadiant = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, size } = req.body;
    const files = req.files;

    let imageUrls = [];

    if (files.length > 0) {
      const uploads = await Promise.all(
        files.map((file) => cloudinary.uploader.upload(file.path, { folder: 'radiant' }))
      );
      imageUrls = uploads.map((img) => img.secure_url);
      files.forEach((file) => fs.unlinkSync(file.path));
    }

    const updated = await Radiant.findByIdAndUpdate(
      id,
      {
        title,
        description,
        price,
        size,
        ...(imageUrls.length && { images: imageUrls }),
      },
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Update failed', error });
  }
};

export const getAllRadiants = async (req, res) => {
  const products = await Radiant.find().sort({ createdAt: -1 });
  res.json(products);
};

export const getRadiantById = async (req, res) => {
  const item = await Radiant.findById(req.params.id);
  item ? res.json(item) : res.status(404).json({ message: 'Not found' });
};

export const deleteRadiant = async (req, res) => {
  await Radiant.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
