import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Login from "./components/Login";
import Dashboard from './components/Dashboard';
import AddSolarModule from './components/AddSolarModule';
import AddInverter from './components/AddInverter';
import AddBattery from './components/AddBattery';
import AddRadiant from './components/AddRadiant';
import BestSeller from './components/BestSeller';
import ApproveVendors from './components/ApproveVendors';
import AdminReplyWrapper from './components/AdminReplyWrapper';
import AddCollectionProduct from './components/AddCollectionProduct';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLogin') === 'true';
    setIsAuthenticated(isLoggedIn);
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-solar-module"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AddSolarModule />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-inverter"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AddInverter />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-battery"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AddBattery />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-radiant"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AddRadiant />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-bestseller"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <BestSeller />
          </ProtectedRoute>
        }
      />
      <Route
        path="/approve-vendors"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ApproveVendors />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin-reply"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AdminReplyWrapper />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-collection"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AddCollectionProduct />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
