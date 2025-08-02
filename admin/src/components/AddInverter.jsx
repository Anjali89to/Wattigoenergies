import React, { useState, useEffect } from 'react';

const CatInverterAdmin = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
  });
  const [image, setImage] = useState(null);
  const [products, setProducts] = useState([]);

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  // 📥 Load all
  const fetchProducts = async () => {
    const res = await fetch(`${API_BASE}/api/catinverter`);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ➕ Add Product
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', formData.title);
    form.append('description', formData.description);
    form.append('price', formData.price);
    form.append('image', image);

    const res = await fetch(`${API_BASE}/api/catinverter/add`, {
      method: 'POST',
      body: form,
    });

    if (res.ok) {
      alert('Product added!');
      setFormData({ title: '', description: '', price: '' });
      setImage(null);
      fetchProducts();
    } else {
      alert('Error adding product');
    }
  };

  // ❌ Delete Product
  const handleDelete = async (id) => {
    if (window.confirm('Delete this product?')) {
      await fetch(`${API_BASE}/api/catinverter/${id}`, {
        method: 'DELETE',
      });
      fetchProducts();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Add Cat Inverter Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          className="border p-2 w-full"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          className="border p-2 w-full"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
        <input
          type="file"
          className="border p-2 w-full"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </form>

      <h3 className="text-lg font-semibold mb-2">All Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border p-4 shadow rounded">
            <img src={product.image} alt="" className="w-full h-40 object-cover rounded" />
            <h4 className="font-bold mt-2">{product.title}</h4>
            <p className="text-sm">{product.description}</p>
            <p className="text-green-600 font-semibold">₹{product.price}</p>
            <button
              onClick={() => handleDelete(product._id)}
              className="bg-red-500 text-white mt-2 px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatInverterAdmin;
