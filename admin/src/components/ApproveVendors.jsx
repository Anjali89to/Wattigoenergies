import React, { useEffect, useState } from 'react';

const ApprovedVendors = () => {
  const [vendors, setVendors] = useState([]);
  const [message, setMessage] = useState('');

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const fetchVendors = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/vendors`);
      const data = await res.json();
      setVendors(data);
    } catch (err) {
      console.error('Error fetching vendors:', err);
    }
  };

  const approveVendor = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/approve/${id}`, {
        method: 'PUT',
      });

      if (res.ok) {
        setMessage('✅ Vendor approved successfully');
        fetchVendors();
      } else {
        setMessage('❌ Approval failed');
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Server error');
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">📋 Vendor Approvals</h2>

      {message && (
        <div className="mb-4 text-center">
          <p className="text-sm px-4 py-2 rounded-md bg-yellow-100 text-yellow-800 inline-block shadow">{message}</p>
        </div>
      )}

      <div className="overflow-x-auto shadow border border-gray-200 rounded-md">
        <table className="min-w-full text-sm text-left bg-white border-collapse">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="px-4 py-3 border">Full Name</th>
              <th className="px-4 py-3 border">Email</th>
              <th className="px-4 py-3 border">Phone</th>
              <th className="px-4 py-3 border">Address</th>
              <th className="px-4 py-3 border">State</th>
              <th className="px-4 py-3 border">Pin Code</th>
              <th className="px-4 py-3 border">Status</th>
              <th className="px-4 py-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor) => (
              <tr key={vendor._id} className="hover:bg-green-50 transition-all">
                <td className="px-4 py-2 border">{vendor.fullName}</td>
                <td className="px-4 py-2 border">{vendor.email}</td>
                <td className="px-4 py-2 border">{vendor.phone}</td>
                <td className="px-4 py-2 border">{vendor.address}</td>
                <td className="px-4 py-2 border">{vendor.state}</td>
                <td className="px-4 py-2 border">{vendor.pinCode}</td>
                <td className="px-4 py-2 border">
                  {vendor.isApproved ? (
                    <span className="text-green-600 font-medium">✅ Approved</span>
                  ) : (
                    <span className="text-yellow-600 font-medium">⏳ Pending</span>
                  )}
                </td>
                <td className="px-4 py-2 border">
                  {!vendor.isApproved ? (
                    <button
                      onClick={() => approveVendor(vendor._id)}
                      className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 rounded-md shadow"
                    >
                      Approve
                    </button>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedVendors;
