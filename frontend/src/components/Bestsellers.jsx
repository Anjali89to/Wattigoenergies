import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    title: 'WAAREE Radiance 3 kW On Grid Single Phase Bifacial Topcon DCR Solar Kit',
    price: '₹147,999.00',
    image: 'https://cdn11.bigcommerce.com/s-unnwlv5df8/images/stencil/500x659/products/579/2232/05__64856.1725016704.1280.1280__80981.1734949539.1280.1280__56305.1740465877.jpg?c=1',
  },
  {
    title: 'WAAREE 10Wp 12V Polycrystalline Small Solar Module',
    price: '₹599.00',
    image: 'https://cdn11.bigcommerce.com/s-unnwlv5df8/images/stencil/320w/products/239/532/1641807727.1280.1280__94391.1641807834.1280.1280__79294.1641808225.jpg?c=1',
  },
  {
    title: 'WAAREE Black/Blue 365Wp 100 Cells Mono PERC Solar Panel',
    price: '₹5,199.00',
    image: 'https://cdn11.bigcommerce.com/s-unnwlv5df8/images/stencil/500x659/products/619/3010/02__94290.1750857500.jpg?c=1',
  },
  {
    title: 'WAAREE 585Wp 144Cells 24 Volts N-Type Framed Dual Glass Bifacial Non-DCR Solar Module',
    price: '₹12,699.00',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1L6nEMHRX7qk0QIyRVhKdtsKeUq8qN2LCug&s',
  },
  {
    title: 'WAAREE 330Wp Polycrystalline Solar Panel',
    price: '₹7,199.00',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOB3yz-rGQkuIJdIomCfZ9kK84wsvZzmYB2Q&s',
  },
  {
    title: 'WAAREE 440Wp Mono PERC Half Cut Solar Panel',
    price: '₹9,999.00',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZ8IV4OO-Vkgi2ovP8uWlT-uzwfcigLHLuA&s',
  },
  {
    title: 'WAAREE 180Wp 12V Solar Panel for Home',
    price: '₹3,699.00',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwAmjQjbwwrNh19bdAXjt37kAFqUNyO5MWg&s',
  },
  {
    title: 'WAAREE 250Wp 24V Polycrystalline Solar Panel',
    price: '₹4,299.00',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHerAKIFvDFE47rq5LRmIKaxPFa-pALjLEU6lC17UASaYLn6HRYiBAoeevP4xcqueojg&usqp=CAU',
  },
];

export default function Bestsellers() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("bestsellers", JSON.stringify(products));
  }, []);

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

  return (
    <div className="py-10 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-green-800 mb-10">
        BESTSELLERS
      </h2>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-xl p-3 flex flex-col items-center text-center hover:shadow-md transition duration-300"
          >
            <img
              onClick={() => navigate(`/bestdetails/${encodeURIComponent(product.title)}`)}
              src={product.image}
              alt={product.title}
              className="w-full h-36 sm:h-44 md:h-56 object-contain rounded-md cursor-pointer transition-transform duration-300 hover:scale-105"
            />
            <h3 className="mt-3 text-sm sm:text-base font-medium text-gray-800 line-clamp-2">
              {product.title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base font-semibold mt-1">{product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-3 text-sm bg-yellow-400 text-black font-semibold py-1.5 px-4 rounded-full hover:bg-yellow-500 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
