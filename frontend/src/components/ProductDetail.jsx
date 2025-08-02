import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    title: 'WAAREE Radiance 3 kW On Grid Single Phase Bifacial Topcon DCR Solar Kit',
    price: '₹147,999.00',
    image: 'https://cdn11.bigcommerce.com/s-unnwlv5df8/images/stencil/500x659/products/579/2232/05__64856.1725016704.1280.1280__80981.1734949539.1280.1280__56305.1740465877.jpg?c=1',
  },
  // ... (other products)
];

export default function Bestsellers() {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productId = product.title;
    const existingIndex = existingCart.findIndex(item => item._id === productId);
    const priceValue = parseFloat(product.price.replace(/[^\d.]/g, '')) || 0;

    if (existingIndex > -1) {
      existingCart[existingIndex].quantity += 1;
    } else {
      existingCart.push({
        ...product,
        _id: productId,
        images: [product.image],
        priceValue,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    navigate('/cart');
  };

  const handleImageClick = (product) => {
    navigate("/product-detail", { state: { product } });
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">BESTSELLERS</h2>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              onClick={() => handleImageClick(product)}
              className="w-full h-64 object-contain rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <h3 className="mt-4 font-semibold text-lg text-center">{product.title}</h3>
            <p className="text-gray-700 font-medium mt-2">{product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
