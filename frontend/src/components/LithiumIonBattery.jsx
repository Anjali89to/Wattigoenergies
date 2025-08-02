import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BatteryCollection = () => {
  const [batteries, setBatteries] = useState([]);
  const [selectedBattery, setSelectedBattery] = useState(null);
  const [reviews, setReviews] = useState([
    '⭐⭐⭐⭐ Great battery! Lasts long and charges fast.',
    '⭐⭐⭐ Good but a bit heavy.',
  ]);
  const [newReview, setNewReview] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBatteries = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/battery`);
        const data = await res.json();
        setBatteries(data);
      } catch (err) {
        console.error('Error fetching batteries:', err);
      }
    };

    fetchBatteries();
  }, []);

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...cart, { ...item, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  const addToWishlist = (item) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const updatedWishlist = [...wishlist, item];
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    navigate('/wishlist');
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      setReviews([`${newReview}`, ...reviews]);
      setNewReview('');
    }
  };

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      {selectedBattery ? (
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image */}
          <img
            src={selectedBattery.image || 'https://dummyimage.com/400x300/ccc/fff&text=No+Image'}
            alt={selectedBattery.title}
            className="w-full md:w-1/2 h-auto object-contain rounded shadow"
          />

          {/* Details */}
          <div className="md:w-1/2 flex flex-col">
            <h2 className="text-2xl font-bold mb-2">{selectedBattery.title}</h2>
            <p className="text-gray-700 mb-4">{selectedBattery.description}</p>
            <p className="text-green-600 font-bold text-xl mb-4">₹{selectedBattery.price}</p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                className="w-full sm:w-auto px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => addToCart(selectedBattery)}
              >
                Add to Cart
              </button>
              <button
                className="w-full sm:w-auto px-4 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
                onClick={() => addToWishlist(selectedBattery)}
              >
                Add to Wishlist
              </button>
            </div>

            {/* Reviews Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3">User Reviews</h3>

              <form onSubmit={handleReviewSubmit} className="mb-4">
                <textarea
                  className="w-full p-3 border rounded resize-none"
                  rows="3"
                  placeholder="Write your review..."
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                />
                <button
                  type="submit"
                  className="mt-2 w-full sm:w-auto px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Submit Review
                </button>
              </form>

              <ul className="space-y-2 text-gray-700 max-h-48 overflow-y-auto">
                {reviews.length === 0 ? (
                  <li className="text-gray-500">No reviews yet. Be the first!</li>
                ) : (
                  reviews.map((review, index) => (
                    <li key={index} className="border-b pb-2 last:border-none">
                      {review}
                    </li>
                  ))
                )}
              </ul>
            </div>

            <button
              className="mt-auto mt-6 text-sm text-blue-600 hover:underline self-start"
              onClick={() => setSelectedBattery(null)}
            >
              ⬅ Back to Battery List
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {batteries.map((battery) => (
            <div
              key={battery._id}
              className="border rounded shadow p-4 cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelectedBattery(battery)}
            >
              <img
                src={battery.image || 'https://dummyimage.com/300x200/ccc/fff&text=No+Image'}
                alt={battery.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-3 font-bold text-lg truncate">{battery.title}</h3>
              <p className="text-sm text-gray-600 mt-1">₹{battery.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BatteryCollection;
