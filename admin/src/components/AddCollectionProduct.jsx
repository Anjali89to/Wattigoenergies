import React, { useState, useEffect } from 'react';

export default function AdminProjectManager() {
  const [formData, setFormData] = useState({ title: '', description: '', price: '' });
  const [image, setImage] = useState(null);
  const [projects, setProjects] = useState([]);

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/projects`);
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error('Failed to fetch projects:', err);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, description, price } = formData;
    if (!title || !description || !price || !image) {
      alert('All fields are required!');
      return;
    }

    const form = new FormData();
    form.append('title', title);
    form.append('description', description);
    form.append('price', price);
    form.append('image', image);

    try {
      const res = await fetch(`${API_BASE}/api/projects/add`, {
        method: 'POST',
        body: form,
      });
      const data = await res.json();
      alert(data.message || 'Project added successfully');
      setFormData({ title: '', description: '', price: '' });
      setImage(null);
      fetchProjects();
    } catch (err) {
      console.error('Submit error:', err);
      alert('Failed to add project');
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this project?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_BASE}/api/projects/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      alert(data.message || 'Project deleted');
      fetchProjects();
    } catch (err) {
      console.error('Delete error:', err);
      alert('Failed to delete project');
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>

      <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-md shadow bg-white">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border p-2 rounded"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 rounded"
        />
        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-2 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add Project
        </button>
      </form>

      <h3 className="text-xl font-semibold mt-10 mb-4">All Projects</h3>

      <div className="grid gap-4">
        {projects.map((project) => (
          <div
            key={project._id}
            className="border p-4 rounded flex items-center gap-4 bg-white shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-24 h-24 object-cover rounded border"
            />
            <div className="flex-1">
              <h4 className="font-bold text-lg">{project.title}</h4>
              <p className="text-sm text-gray-700">{project.description}</p>
              <p className="text-green-600 font-semibold mt-1">₹{project.price}</p>
            </div>
            <button
              onClick={() => handleDelete(project._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
