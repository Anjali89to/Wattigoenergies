import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CatInverterPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  const [rating, setRating] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/api/catinverter')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      const storedReviews = JSON.parse(localStorage.getItem(`reviews-${selectedProduct._id}`)) || [];
      setReviews(storedReviews);
    }
  }, [selectedProduct]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
    setReviews([]);
  };

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify([...existingCart, product]));
    navigate('/cart');
  };

  const handleAddToWishlist = (product) => {
    const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    localStorage.setItem('wishlist', JSON.stringify([...existingWishlist, product]));
    navigate('/wishlist');
  };

  const handleReviewSubmit = () => {
    if (!reviewerName.trim() || !reviewText.trim()) return;

    const newReview = {
      name: reviewerName,
      rating,
      text: reviewText,
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews-${selectedProduct._id}`, JSON.stringify(updatedReviews));

    // Clear form
    setReviewerName('');
    setReviewText('');
    setRating(5);
  };

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      {!selectedProduct ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Cat Inverter Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {products.map((product) => (
              <div
                key={product._id}
                className="border shadow rounded p-4 cursor-pointer hover:shadow-lg transition flex flex-col"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 sm:h-48 object-cover rounded mb-3"
                />
                <h3 className="text-lg font-semibold truncate">{product.title}</h3>
                <p className="text-sm text-gray-600 flex-grow mt-1">{product.description}</p>
                <p className="text-green-700 font-bold mt-3 text-lg">₹{product.price}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="border shadow-lg rounded p-4 sm:p-6">
          {/* Product Details: Stack on mobile, side-by-side on md+ */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-auto object-cover rounded"
              />
            </div>

            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-3">{selectedProduct.title}</h2>
                <p className="text-gray-700 mb-5">{selectedProduct.description}</p>
                <p className="text-green-700 font-bold text-2xl mb-5">₹{selectedProduct.price}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <button
                  onClick={() => handleAddToCart(selectedProduct)}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleAddToWishlist(selectedProduct)}
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded transition"
                >
                  Add to Wishlist
                </button>
              </div>

              <button
                onClick={handleBackClick}
                className="text-blue-600 hover:underline self-start mt-2"
              >
                ← Back to Products
              </button>
            </div>
          </div>

          {/* Review Section */}
          <div className="mt-10 border-t pt-6">
            <h3 className="text-xl font-semibold mb-5">Customer Reviews</h3>

            <div className="space-y-4 mb-8 max-h-64 overflow-y-auto">
              {reviews.length === 0 ? (
                <p className="text-gray-500">No reviews yet. Be the first to review!</p>
              ) : (
                reviews.map((rev, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded shadow-sm">
                    <p className="text-sm text-gray-800">
                      {'⭐️'.repeat(rev.rating)} - {rev.text}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">- {rev.name}</p>
                  </div>
                ))
              )}
            </div>

            {/* Add Review Form */}
            <div className="bg-gray-50 p-4 rounded shadow-inner">
              <h4 className="text-lg font-semibold mb-4">Write a Review</h4>
              <input
                type="text"
                placeholder="Your Name"
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
                className="w-full mb-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full mb-3 p-3 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} Star{r > 1 && 's'}
                  </option>
                ))}
              </select>
              <button
                onClick={handleReviewSubmit}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded transition"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatInverterPage;
