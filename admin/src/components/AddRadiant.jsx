import React, { useState, useEffect } from 'react';

export default function Radiant() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    size: '',
    images: [],
  });

  const [products, setProducts] = useState([]);
  const API_BASE = import.meta.env.VITE_API_BASE_URL;
  const API_URL = `${API_BASE}/api/radiant`;

  const fetchRadiants = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error('Fetch failed:', err);
    }
  };

  useEffect(() => {
    fetchRadiants();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === 'images') {
      setForm({ ...form, images: e.target.files });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.description || !form.price || !form.size || form.images.length === 0) {
      alert('All fields are required!');
      return;
    }

    const data = new FormData();
    data.append('title', form.title);
    data.append('description', form.description);
    data.append('price', form.price);
    data.append('size', form.size);
    for (let file of form.images) {
      data.append('images', file);
    }

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        body: data,
      });

      if (!res.ok) throw new Error('Upload failed');

      alert('Uploaded!');
      fetchRadiants();
      setForm({ title: '', description: '', price: '', size: '', images: [] });
      document.querySelector('input[name="images"]').value = '';
    } catch (err) {
      console.error(err);
      alert('Error uploading');
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Delete this product?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Delete failed');
      fetchRadiants();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">☀️ Radiant Admin</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8 border p-4 rounded shadow bg-white">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border p-2"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2"
          required
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-2"
          required
        />
        <input
          type="text"
          name="size"
          value={form.size}
          onChange={handleChange}
          placeholder="Size"
          className="w-full border p-2"
          required
        />
        <input
          type="file"
          name="images"
          multiple
          onChange={handleChange}
          className="w-full"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Radiant
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((item) => (
          <div key={item._id} className="border p-4 rounded shadow bg-white">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p>{item.description}</p>
            <p className="text-sm text-gray-600">₹{item.price} | Size: {item.size}</p>
            <div className="flex gap-2 py-2 overflow-x-auto">
              {item.images?.map((img, i) => (
                <img key={i} src={img} alt="product" className="h-24 border rounded" />
              ))}
            </div>
            <button
              onClick={() => handleDelete(item._id)}
              className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
