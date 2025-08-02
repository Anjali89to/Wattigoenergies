import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ModuleFrontendPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  const [rating, setRating] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/module/all`)
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
    const isAlreadyInCart = existingCart.some(p => p._id === product._id);

    if (!isAlreadyInCart) {
      localStorage.setItem('cart', JSON.stringify([...existingCart, product]));
    }

    navigate('/cart');
  };

  const handleAddToWishlist = (product) => {
    const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isAlreadyInWishlist = existingWishlist.some(p => p._id === product._id);

    if (!isAlreadyInWishlist) {
      localStorage.setItem('wishlist', JSON.stringify([...existingWishlist, product]));
    }

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

    setReviewerName('');
    setReviewText('');
    setRating(5);
  };

  const averageRating = reviews.length
    ? (reviews.reduce((acc, cur) => acc + cur.rating, 0) / reviews.length).toFixed(1)
    : null;

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      {!selectedProduct ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Solar Modules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="border rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 sm:h-48 w-full object-cover rounded mb-3"
                />
                <h3 className="font-semibold text-lg truncate">{product.title}</h3>
                <p className="text-sm line-clamp-3">{product.description}</p>
                <p className="text-green-600 mt-2 font-medium">₹{product.price}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="border shadow-lg p-4 sm:p-6 rounded max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full object-cover rounded max-h-80 sm:max-h-[400px]"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">{selectedProduct.title}</h2>
                <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
                <p className="text-green-700 font-bold text-xl mb-2">₹{selectedProduct.price}</p>
                {averageRating && (
                  <p className="text-yellow-500 font-semibold mb-4">
                    ⭐ {averageRating} / 5 ({reviews.length} review{reviews.length > 1 && 's'})
                  </p>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <button
                  onClick={() => handleAddToCart(selectedProduct)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full sm:w-auto"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleAddToWishlist(selectedProduct)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full sm:w-auto"
                >
                  Add to Wishlist
                </button>
              </div>
              <button
                onClick={handleBackClick}
                className="text-blue-500 hover:underline mt-2 self-start"
              >
                ← Back to Products
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-10 border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
              {reviews.length === 0 && (
                <p className="text-gray-500">No reviews yet. Be the first to review!</p>
              )}
              {reviews.map((rev, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded">
                  <p className="text-sm text-gray-800">
                    {'⭐️'.repeat(rev.rating)} - {rev.text}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">- {rev.name}</p>
                </div>
              ))}
            </div>

            {/* Review Form */}
            <div className="bg-gray-50 p-4 rounded shadow-inner">
              <h4 className="text-lg font-semibold mb-2">Write a Review</h4>
              <input
                type="text"
                placeholder="Your Name"
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
                className="w-full mb-2 p-2 border rounded"
              />
              <textarea
                placeholder="Your Review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full mb-2 p-2 border rounded resize-none"
                rows={3}
              />
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="mb-2 p-2 border rounded"
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} Star{r > 1 && 's'}
                  </option>
                ))}
              </select>
              <button
                onClick={handleReviewSubmit}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full sm:w-auto"
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

export default ModuleFrontendPage;
