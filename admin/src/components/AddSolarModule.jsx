import React, { useState, useEffect } from 'react';

const AdminModulePage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: null,
  });

  const [products, setProducts] = useState([]);

  const API_BASE = import.meta.env.VITE_API_BASE_URL;
  const API_ENDPOINT = `${API_BASE}/api/module`;

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_ENDPOINT}/all`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch modules:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('title', formData.title);
    form.append('description', formData.description);
    form.append('price', formData.price);
    form.append('image', formData.image);

    try {
      const res = await fetch(`${API_ENDPOINT}/add`, {
        method: 'POST',
        body: form,
      });

      if (!res.ok) throw new Error('Upload failed');

      alert('Module product added');
      setFormData({ title: '', description: '', price: '', image: null });
      document.querySelector('input[name="image"]').value = ''; // Clear file input
      fetchProducts();
    } catch (error) {
      alert('Failed to add module');
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      const res = await fetch(`${API_ENDPOINT}/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Delete failed');

      alert('Deleted successfully');
      fetchProducts();
    } catch (error) {
      alert('Delete failed');
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Module Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full p-2 border rounded"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          className="w-full border rounded"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-4">All Module Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow bg-white">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-cover rounded mb-2"
            />
            <h3 className="font-bold">{product.title}</h3>
            <p className="text-sm">{product.description}</p>
            <p className="text-green-700 font-semibold mt-1">₹{product.price}</p>
            <button
              onClick={() => handleDelete(product._id)}
              className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminModulePage;
