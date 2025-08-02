import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = JSON.parse(localStorage.getItem("bestsellers")) || [];
  const product = products.find((item) => item.title === id);

  const [reviews, setReviews] = useState([
    { name: "Ravi Sharma", comment: "Excellent product! Works perfectly." },
    { name: "Anjali Verma", comment: "Good value for money. Satisfied with the performance." },
  ]);

  const [reviewForm, setReviewForm] = useState({ name: "", comment: "" });

  if (!product) {
    return <div className="text-center text-red-500 mt-10">Product not found</div>;
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex((item) => item._id === product.title);
    const priceValue = parseFloat(product.price.replace(/[^\d.]/g, "")) || 0;

    if (index > -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ ...product, _id: product.title, images: [product.image], priceValue, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist.find((item) => item.title === product.title)) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
    navigate("/wishlist"); // Navigate to Wishlist Page
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.comment) return;
    setReviews((prev) => [...prev, reviewForm]);
    setReviewForm({ name: "", comment: "" });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="md:w-1/2">
          <img src={product.image} alt={product.title} className="w-full h-[400px] object-contain rounded" />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold">{product.title}</h2>
            <p className="text-green-700 text-2xl font-semibold mt-2">{product.price}</p>
          </div>
          <div className="mt-6 flex gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-yellow-400 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500"
            >
              Add to Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="bg-green-500 px-6 py-2 rounded-full text-white font-semibold hover:bg-green-600"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
        {reviews.length === 0 ? (
          <p className="text-gray-600">No reviews yet. Be the first to review!</p>
        ) : (
          <ul className="space-y-4">
            {reviews.map((rev, index) => (
              <li key={index} className="border rounded p-4 bg-gray-50">
                <p className="font-semibold">{rev.name}</p>
                <p className="text-gray-700 mt-1">{rev.comment}</p>
              </li>
            ))}
          </ul>
        )}

        {/* Add Review Form */}
        <form onSubmit={handleReviewSubmit} className="mt-6 space-y-4">
          <h4 className="text-lg font-semibold">Write a Review</h4>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded p-2"
            value={reviewForm.name}
            onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Review"
            className="w-full border rounded p-2"
            value={reviewForm.comment}
            onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
            rows={4}
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
