import ModuleProduct from '../models/moduleModel.js';

export const addModuleProduct = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const image = req.file ? req.file.path : null;

    const newProduct = new ModuleProduct({
      title,
      description,
      price,
      image,
    });

    await newProduct.save();
    res.status(201).json({ message: 'Module product added', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add module product', error: error.message });
  }
};

export const getAllModuleProducts = async (req, res) => {
  try {
    const products = await ModuleProduct.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get module products', error: error.message });
  }
};

export const deleteModuleProduct = async (req, res) => {
  try {
    const product = await ModuleProduct.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Module product not found' });
    }
    res.json({ message: 'Module product deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete module product', error: error.message });
  }
};
