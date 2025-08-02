import Battery from '../models/batteryModel.js';

// ➕ Add Battery
export const addBattery = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const image = req.file?.path;

    if (!image) return res.status(400).json({ error: 'Image is required' });

    const battery = new Battery({ title, description, price, image });
    await battery.save();
    res.status(201).json({ message: 'Battery product added', battery });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📥 Get All Batteries
export const getAllBatteries = async (req, res) => {
  try {
    const batteries = await Battery.find().sort({ _id: -1 });
    res.json(batteries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ❌ Delete Battery
export const deleteBattery = async (req, res) => {
  try {
    const { id } = req.params;
    await Battery.findByIdAndDelete(id);
    res.json({ message: 'Battery product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
