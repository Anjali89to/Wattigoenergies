import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// ✅ Access base URL from .env
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const VendorRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    state: '',
    pinCode: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseUrl}/api/vendor/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setIsError(false);
        setMessage('✅ Registration successful! Wait for admin approval.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          state: '',
          pinCode: '',
          password: ''
        });
        setTimeout(() => navigate('/login'), 2000);
      } else {
        const errorData = await res.json();
        setIsError(true);
        setMessage(`❌ ${errorData.error || 'Registration failed.'}`);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setIsError(true);
      setMessage('❌ Something went wrong. Try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200 p-4">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Vendor Registration</h2>

        {message && (
          <div
            className={`mb-4 text-center font-medium py-2 px-3 rounded ${
              isError ? 'text-red-600 bg-red-100' : 'text-green-700 bg-green-100'
            }`}
            role="alert"
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            autoComplete="name"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            autoComplete="tel"
            pattern="[0-9]{10,15}"
            title="Enter a valid phone number"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            autoComplete="street-address"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
            autoComplete="address-level1"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
          />
          <input
            type="number"
            name="pinCode"
            placeholder="Pin Code"
            value={formData.pinCode}
            onChange={handleChange}
            required
            autoComplete="postal-code"
            min="0"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300 text-base"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-700 mt-4">
          Already registered?{' '}
          <Link to="/login" className="text-green-600 hover:underline">
            Go to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VendorRegister;
