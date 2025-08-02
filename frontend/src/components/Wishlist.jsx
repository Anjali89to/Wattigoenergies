import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  const handleRemove = (title) => {
    const updated = wishlist.filter((item) => item.title !== title);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    setWishlist(updated);
  };

  const handleClearWishlist = () => {
    localStorage.removeItem("wishlist");
    setWishlist([]);
  };

  const handleAddToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const image =
      item.image || "https://dummyimage.com/150x150/cccccc/ffffff&text=No+Image";
    const price =
      typeof item.price === "string"
        ? parseFloat(item.price.replace(/[^\d.]/g, "")) || 0
        : item.price;

    const existingIndex = cart.findIndex(
      (c) => c._id === (item._id || item.title)
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        _id: item._id || item.title,
        title: item.title,
        price,
        size: item.size || "",
        quantity: 1,
        image,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 mt-6 bg-white rounded-lg shadow">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
          My Wishlist ({wishlist.length})
        </h2>
        {wishlist.length > 0 && (
          <button
            onClick={handleClearWishlist}
            className="bg-red-600 text-white px-5 py-3 rounded-md hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
            aria-label="Clear all items from wishlist"
          >
            Clear All
          </button>
        )}
      </div>

      {wishlist.length === 0 ? (
        <p className="text-gray-500 text-center text-lg py-10">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded-lg p-4 shadow flex flex-col"
            >
              <img
                src={
                  item.image ||
                  "https://dummyimage.com/300x200/ccc/fff&text=No+Image"
                }
                alt={item.title}
                className="w-full h-48 object-contain rounded mb-4"
                onError={(e) =>
                  (e.target.src =
                    "https://dummyimage.com/300x200/ccc/fff&text=No+Image")
                }
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-semibold line-clamp-2">
                {item.title}
              </h3>
              <p className="text-green-700 font-bold mt-2 text-lg">₹{item.price}</p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-between">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-yellow-500 text-black font-semibold px-5 py-3 rounded hover:bg-yellow-600 transition focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1"
                  aria-label={`Add ${item.title} to cart`}
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleRemove(item.title)}
                  className="bg-gray-800 text-white px-5 py-3 rounded hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-1"
                  aria-label={`Remove ${item.title} from wishlist`}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
