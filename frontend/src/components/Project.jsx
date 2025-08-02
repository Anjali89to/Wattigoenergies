import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function AllProjects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [review, setReview] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${baseUrl}/api/projects`)
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const normalizeImage = (item) => {
    if (!item.images || !Array.isArray(item.images)) {
      return { ...item, images: [item.image || 'https://dummyimage.com/300x200?text=No+Image'] };
    }
    return item;
  };

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const normalized = normalizeImage(item);

    const existing = cart.findIndex(p => p._id === item._id);
    if (existing !== -1) {
      cart[existing].quantity += 1;
    } else {
      cart.push({ ...normalized, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart');
  };

  const addToWishlist = (item) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const normalized = normalizeImage(item);

    const exists = wishlist.some(p => p._id === item._id);
    if (!exists) {
      wishlist.push(normalized);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }

    navigate('/wishlist');
  };

  const submitReview = () => {
    if (!review.trim()) return;
    const existing = selectedProject.reviews || [];
    const updated = [...existing, review];
    setSelectedProject({ ...selectedProject, reviews: updated });
    setReview('');
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">All Projects</h1>

      {selectedProject ? (
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src={selectedProject.images?.[0] || 'https://dummyimage.com/400x300?text=No+Image'}
            alt={selectedProject.title}
            className="w-full h-auto object-contain rounded shadow"
          />

          <div>
            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-gray-700 mb-3">{selectedProject.description}</p>
            <p className="text-green-600 font-bold text-xl mb-2">₹{selectedProject.price}</p>
            {selectedProject.size && (
              <p className="text-sm text-gray-500 mb-4">Size: {selectedProject.size}</p>
            )}

            <div className="space-x-4 mb-6">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={() => addToCart(selectedProject)}
              >
                Add to Cart
              </button>
              <button
                className="px-4 py-2 bg-pink-500 text-white rounded"
                onClick={() => addToWishlist(selectedProject)}
              >
                Add to Wishlist
              </button>
            </div>

            {/* Reviews Section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">User Reviews</h3>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                {selectedProject.reviews?.length > 0 ? (
                  selectedProject.reviews.map((r, idx) => <li key={idx}>⭐ {r}</li>)
                ) : (
                  <li>No reviews yet.</li>
                )}
              </ul>
              <div className="flex items-center space-x-2">
                <input
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="border px-2 py-1 rounded w-full"
                  placeholder="Write a review..."
                />
                <button
                  className="px-3 py-1 bg-green-600 text-white rounded"
                  onClick={submitReview}
                >
                  Submit
                </button>
              </div>
            </div>

            <button
              className="mt-6 text-blue-600 text-sm hover:underline"
              onClick={() => setSelectedProject(null)}
            >
              ⬅ Back to Project List
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="border rounded shadow p-4 cursor-pointer hover:shadow-md transition"
              onClick={() => setSelectedProject(normalizeImage(project))}
            >
              <img
                src={project.images?.[0] || project.image || 'https://dummyimage.com/300x200?text=No+Image'}
                alt={project.title}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="mt-2 text-lg font-bold">{project.title}</h3>
              <p className="text-sm text-gray-600">₹{project.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
