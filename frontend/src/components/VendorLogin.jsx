import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VendorLogin = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setCredentials(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/vendor/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });

      if (!res.ok) {
        setIsError(true);
        setMessage('❌ Invalid email or password.');
        return;
      }

      const data = await res.json();

      if (!data.vendor?.isApproved) {
        setIsError(true);
        setMessage('⏳ Your account is not approved yet by admin.');
        return;
      }

      localStorage.setItem('vendorToken', data.token);
      setIsError(false);
      setMessage('✅ Login successful!');
      setTimeout(() => navigate('/vendor/dashboard'), 1000);
    } catch (error) {
      console.error('Login error:', error);
      setIsError(true);
      setMessage('❌ Server error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-4">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">Vendor Login</h2>

        {message && (
          <div
            className={`mb-4 text-center text-sm font-medium py-2 px-3 rounded ${
              isError ? 'text-red-600 bg-red-100' : 'text-green-700 bg-green-100'
            }`}
            role="alert"
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-base"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-base"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300 text-base"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default VendorLogin;
