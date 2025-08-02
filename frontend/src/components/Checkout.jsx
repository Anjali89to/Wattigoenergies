// components/Checkout.jsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const { cartItem } = location.state || {};

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed:', {
      customer: form,
      product: cartItem,
    });
    alert('Order placed successfully!');
  };

  if (!cartItem) {
    return <p className="text-center mt-10 text-red-600 text-xl">No items to checkout</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-green-700">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />

        <textarea
          name="address"
          placeholder="Shipping Address"
          value={form.address}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        ></textarea>

        <div className="border-t pt-4">
          <p className="text-lg font-semibold">
            Product: {cartItem.title} × {cartItem.quantity}
          </p>
          <p className="text-xl font-bold text-green-700">
            Total: ₹{(cartItem.priceValue * cartItem.quantity).toFixed(2)}
          </p>
        </div>

        <button
          type="submit"
          className="mt-4 w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded text-lg font-semibold"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
