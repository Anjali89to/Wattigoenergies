import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const CatInverterPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${baseUrl}/api/catinverter`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify([...existingCart, product]));
    navigate('/cart');
  };

  const addToWishlist = (product) => {
    const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    localStorage.setItem('wishlist', JSON.stringify([...existingWishlist, product]));
    navigate('/wishlist');
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {!selectedProduct ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Cat Inverter Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full aspect-[4/3] object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-600 flex-grow">{product.description}</p>
                <p className="text-green-700 font-bold mt-2 text-lg">₹{product.price}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col md:flex-row gap-6 items-start border rounded-lg shadow-lg p-6">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="w-full md:w-1/2 rounded-md object-cover max-h-[300px] sm:max-h-[400px]"
          />
          <div className="flex-1 flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">{selectedProduct.title}</h2>
            <p className="text-gray-700 mb-6 overflow-auto max-h-48">{selectedProduct.description}</p>
            <p className="text-green-700 font-bold text-xl mb-6">₹{selectedProduct.price}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={() => addToCart(selectedProduct)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded text-lg transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => addToWishlist(selectedProduct)}
                className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded text-lg transition"
              >
                Add to Wishlist
              </button>
            </div>
            <button
              onClick={handleBackClick}
              className="text-blue-600 hover:underline self-start"
            >
              ← Back to Products
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatInverterPage;
