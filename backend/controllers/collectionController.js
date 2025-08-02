import Collection from '../models/collectionModel.js';

export const addCollectionProduct = async (req, res) => {
  try {
    const { title, description, price } = req.body;

    const images = req.files;
    const product = new Collection({
      title,
      description,
      price,
      image1: images?.image1?.[0]?.path || '',
      image2: images?.image2?.[0]?.path || '',
      image3: images?.image3?.[0]?.path || '',
      image4: images?.image4?.[0]?.path || '',
    });

    await product.save();
    res.status(201).json({ message: 'Product added', product });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getAllCollectionProducts = async (req, res) => {
  try {
    const products = await Collection.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch products', error: error.message });
  }
};

export const deleteCollectionProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Collection.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete product', error: error.message });
  }
};
