import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    size: "",
    category: "Radiant",
  });

  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImages({ ...images, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    Object.entries(images).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });

    try {
      const res = await axios.post("http://localhost:4000/api/products/add", data);
      alert("Product uploaded successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Error uploading product.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" onChange={handleInputChange} className="w-full p-2 border rounded" required />
        <textarea name="description" placeholder="Description" onChange={handleInputChange} className="w-full p-2 border rounded" required />
        <input type="number" name="price" placeholder="Price" onChange={handleInputChange} className="w-full p-2 border rounded" required />
        <input type="text" name="size" placeholder="Size (e.g. 500W)" onChange={handleInputChange} className="w-full p-2 border rounded" required />

        <select name="category" onChange={handleInputChange} className="w-full p-2 border rounded">
          <option value="Radiant">Radiant</option>
          <option value="Solar Module">Solar Module</option>
          <option value="Inverter">Inverter</option>
          <option value="Battery">Battery</option>
        </select>

        <div className="grid grid-cols-2 gap-4">
          <input type="file" name="image1" accept="image/*" onChange={handleImageChange} className="border p-2" required />
          <input type="file" name="image2" accept="image/*" onChange={handleImageChange} className="border p-2" required />
          <input type="file" name="image3" accept="image/*" onChange={handleImageChange} className="border p-2" required />
          <input type="file" name="image4" accept="image/*" onChange={handleImageChange} className="border p-2" required />
        </div>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
