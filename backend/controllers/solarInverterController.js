import SolarInverter from '../models/solarInverterModel.js';

// Add inverter
export const addInverter = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const files = req.files;

    const image1 = files['image1']?.[0]?.path || '';
    const image2 = files['image2']?.[0]?.path || '';
    const image3 = files['image3']?.[0]?.path || '';

    const newInverter = new SolarInverter({ title, description, price, image1, image2, image3 });
    await newInverter.save();
    res.status(201).json({ message: 'Inverter added successfully', inverter: newInverter });
  } catch (error) {
    res.status(500).json({ message: 'Error adding inverter', error: error.message });
  }
};

// Get all
export const getAllInverters = async (req, res) => {
  try {
    const inverters = await SolarInverter.find();
    res.json(inverters);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching inverters', error: error.message });
  }
};

// Delete
export const deleteInverter = async (req, res) => {
  try {
    const { id } = req.params;
    await SolarInverter.findByIdAndDelete(id);
    res.json({ message: 'Inverter deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting inverter', error: error.message });
  }
};
