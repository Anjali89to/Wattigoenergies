import Catinverter from '../models/catinverterModel.js';

// ➕ Add Catinverter
export const addCatinverter = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const image = req.file?.path;

    if (!image) return res.status(400).json({ error: 'Image is required' });

    const newItem = new Catinverter({ title, description, price, image });
    await newItem.save();
    res.status(201).json({ message: 'Catinverter product added', catinverter: newItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📥 Get All Catinverters
export const getAllCatinverters = async (req, res) => {
  try {
    const items = await Catinverter.find().sort({ _id: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ❌ Delete Catinverter
export const deleteCatinverter = async (req, res) => {
  try {
    const { id } = req.params;
    await Catinverter.findByIdAndDelete(id);
    res.json({ message: 'Catinverter product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
