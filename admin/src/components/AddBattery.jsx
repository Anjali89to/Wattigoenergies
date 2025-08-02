import React, { useEffect, useState } from 'react';

const AdminPanelBattery = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: null,
  });
  const [batteries, setBatteries] = useState([]);

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const fetchBatteries = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/battery`);
      const data = await res.json();
      setBatteries(data);
    } catch (err) {
      console.error('Error fetching batteries:', err);
    }
  };

  useEffect(() => {
    fetchBatteries();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append('title', formData.title);
    body.append('description', formData.description);
    body.append('price', formData.price);
    body.append('image', formData.image);

    try {
      const res = await fetch(`${API_BASE}/api/battery/add`, {
        method: 'POST',
        body,
      });

      if (res.ok) {
        alert('✅ Battery added successfully');
        setFormData({ title: '', description: '', price: '', image: null });
        fetchBatteries();
      } else {
        alert('❌ Error adding battery');
      }
    } catch (error) {
      console.error('Error submitting battery:', error);
      alert('❌ Network error. Try again later.');
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/api/battery/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        alert('🗑️ Battery deleted');
        fetchBatteries();
      } else {
        alert('❌ Failed to delete battery');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('❌ Server error. Please try again.');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h2 className="text-xl font-bold">Add Battery Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Add Battery
        </button>
      </form>

      <h2 className="text-xl font-bold mt-8">Existing Batteries</h2>
      <ul className="space-y-4">
        {batteries.map((battery) => (
          <li
            key={battery._id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{battery.title}</h3>
              <p>{battery.description}</p>
              <p>₹{battery.price}</p>
            </div>
            <div className="flex gap-4 items-center">
              <img
                src={battery.image}
                alt="Battery"
                className="w-20 h-20 object-cover rounded"
              />
              <button
                onClick={() => handleDelete(battery._id)}
                className="text-red-600 font-bold"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanelBattery;
