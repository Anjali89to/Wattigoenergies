import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const Dashboard = () => {
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales Value',
        data: [65, 78, 70, 85, 60, 70, 90],
        fill: false,
        borderColor: '#4f46e5',
        backgroundColor: '#4f46e5',
        tension: 0.4,
      },
      {
        label: 'Target',
        data: [60, 68, 75, 80, 70, 65, 88],
        fill: false,
        borderColor: '#6366f1',
        backgroundColor: '#6366f1',
        tension: 0.4,
        borderDash: [5, 5],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex min-h-screen bg-green-50">
      {/* Sidebar */}
      <div className="w-64 p-6 space-y-4 bg-white shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-green-700">Quick Actions</h2>

        <Link to="/add-solar-module" className="block w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition text-center">Add Solar Module</Link>
        <Link to="/add-inverter" className="block w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition text-center">Add Inverter</Link>
        <Link to="/add-battery" className="block w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition text-center">Add Battery</Link>
        <Link to="/add-radiant" className="block w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition text-center">Add Radiant</Link>
        <Link to="/add-bestseller" className="block w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition text-center">Add Best Seller</Link>
        <Link to="/add-collection" className="block w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition text-center">Add Collection Product</Link>
        <Link to="/approve-vendors" className="block w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition text-center">Approve Vendors</Link>
        <Link to="/admin-reply" className="block w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition text-center">Admin Replies</Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold text-green-700">Welcome to the Admin Dashboard</h1>
        <p className="mt-4 text-gray-600 mb-8">Select an action from the sidebar.</p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {/* Traffic */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-sm font-semibold text-gray-500">TRAFFIC</h3>
            <p className="text-2xl font-bold">350,897</p>
            <p className="text-green-600 text-sm mt-1">↑ 3.48% Since last month</p>
          </div>

          {/* New Users */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-sm font-semibold text-gray-500">NEW USERS</h3>
            <p className="text-2xl font-bold">2,356</p>
            <p className="text-red-600 text-sm mt-1">↓ 3.48% Since last week</p>
          </div>

          {/* Sales */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-sm font-semibold text-gray-500">SALES</h3>
            <p className="text-2xl font-bold">924</p>
            <p className="text-orange-600 text-sm mt-1">↓ 1.10% Since yesterday</p>
          </div>

          {/* Performance */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-sm font-semibold text-gray-500">PERFORMANCE</h3>
            <p className="text-2xl font-bold">49.65%</p>
            <p className="text-green-600 text-sm mt-1">↑ 12% Since last month</p>
          </div>
        </div>

        {/* Sales Chart */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Sales Value</h2>
          <Line data={salesData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
