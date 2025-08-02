import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const RadianceSolarKit = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [review, setReview] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRadiantProducts = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/radiant`);
        if (!res.ok) throw new Error('Network error while fetching Radiants');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRadiantProducts();
  }, []);

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex((cartItem) => cartItem._id === item._id);
    const image = item.images?.[0] || 'https://dummyimage.com/150x150/cccccc/ffffff&text=No+Image';

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({
        _id: item._id,
        title: item.title,
        price: typeof item.price === 'string' ? parseFloat(item.price.replace(/[^\d.]/g, '')) : item.price,
        image,
        size: item.size || '',
        quantity: 1,
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart');
    navigate('/cart');
  };

  const addToWishlist = (item) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const image = item.images?.[0] || 'https://dummyimage.com/150x150/cccccc/ffffff&text=No+Image';

    const alreadyExists = wishlist.find((wish) => wish._id === item._id);
    if (!alreadyExists) {
      wishlist.push({
        _id: item._id,
        title: item.title,
        price: item.price,
        image,
        size: item.size || '',
      });
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      alert('Added to wishlist');
    } else {
      alert('Already in wishlist');
    }
    navigate('/wishlist');
  };

  const submitReview = () => {
    if (!review.trim()) return;

    const existing = selectedProduct.reviews || [];
    const updated = [...existing, review];

    setSelectedProduct({ ...selectedProduct, reviews: updated });
    setReview('');
  };

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Radiance Solar Kit</h1>

      {selectedProduct ? (
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={selectedProduct.images?.[0] || 'https://dummyimage.com/400x300?text=No+Image'}
            alt={selectedProduct.title}
            className="w-full md:w-1/2 h-auto object-contain rounded shadow"
            onError={(e) => (e.target.src = 'https://dummyimage.com/400x300?text=No+Image')}
          />

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{selectedProduct.title}</h2>
            <p className="text-gray-700 mb-3">{selectedProduct.description}</p>
            <p className="text-green-600 font-bold text-xl mb-2">₹{selectedProduct.price}</p>
            {selectedProduct.size && (
              <p className="text-sm text-gray-500 mb-4">Size: {selectedProduct.size}</p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded"
                onClick={() => addToCart(selectedProduct)}
              >
                Add to Cart
              </button>
              <button
                className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded"
                onClick={() => addToWishlist(selectedProduct)}
              >
                Add to Wishlist
              </button>
            </div>

            {/* Review Section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">User Reviews</h3>
              <ul className="text-sm text-gray-600 space-y-2 mb-4 max-h-40 overflow-auto">
                {selectedProduct.reviews?.length > 0 ? (
                  selectedProduct.reviews.map((r, idx) => <li key={idx}>⭐ {r}</li>)
                ) : (
                  <li>No reviews yet.</li>
                )}
              </ul>
              <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0">
                <input
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="border px-2 py-1 rounded w-full sm:flex-1"
                  placeholder="Write a review..."
                />
                <button
                  className="px-3 py-1 bg-green-600 text-white rounded w-full sm:w-auto"
                  onClick={submitReview}
                >
                  Submit
                </button>
              </div>
            </div>

            <button
              className="mt-6 text-blue-600 text-sm hover:underline"
              onClick={() => setSelectedProduct(null)}
            >
              ⬅ Back to Product List
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded shadow p-4 hover:shadow-md transition relative"
            >
              <img
                src={product.images?.[0] || 'https://dummyimage.com/300x200?text=No+Image'}
                alt={product.title}
                className="w-full h-40 object-cover rounded cursor-pointer"
                onClick={() => setSelectedProduct(product)}
                onError={(e) => (e.target.src = 'https://dummyimage.com/300x200?text=No+Image')}
              />
              <h3 className="mt-2 font-bold text-lg">{product.title}</h3>
              <p className="text-sm text-gray-600">₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RadianceSolarKit;
