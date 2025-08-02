import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PopularCategories from "./components/PopularCategories";
import Bestsellers from "./components/Bestsellers";
import About from "./components/About";
import BestOffer from "./components/BestOffer";
import WorkProcess from "./components/WorkProcess";
import EnergyProgress from "./components/EnergyProgress";
import CallToAction from "./components/CallToAction";
import WhyChooseUs from "./components/WhyChooseUs";
import StatsSection from "./components/StatsSection";
import CustomerReviews from "./components/CustomerReviews";
import RecentBlogs from "./components/RecentBlogs";
import Checkout from './components/Checkout';
import BestDetails from './components/BestDetails';
import Register from './components/Register';
import Login from './components/Login';
import Footer from "./components/Footer";

// Category Pages
import RadianceSolarKit from "./components/RadianceSolarKit";
import SolarModule from "./components/SolarModule";
import SolarInverter from "./components/SolarInverter";
import LithiumIonBattery from "./components/LithiumIonBattery";

// Other Pages
import AboutPage from "./components/About";
import ServicesPage from "./components/Services";
import Project from "./components/Project";   // <-- Here
import ContactPage from "./components/Contact";
import VendorRegister from './components/VendorRegister';
import ProductDetail from "./components/ProductDetail";
import Cart from './components/Cart';
import Wishlist from "./components/Wishlist";
import CatInverterDetails from './components/CatInverterDetails';

function App() {
  return (
    <>
      <TopBar />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <PopularCategories />
              <Bestsellers />
              <About />
              <BestOffer />
              <WorkProcess />
              <EnergyProgress />
              <CallToAction />
              <WhyChooseUs />
              <StatsSection />
              <CustomerReviews />
              <RecentBlogs />
              <Footer />
            </>
          }
        />

        {/* Page Routes */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/aboutus" element={<AboutPage />} /> {/* alias for /about */}
        <Route path="/home" element={
          <>
            <HeroSection />
            <PopularCategories />
            <Bestsellers />
            <About />
            <BestOffer />
            <WorkProcess />
            <EnergyProgress />
            <CallToAction />
            <WhyChooseUs />
            <StatsSection />
            <CustomerReviews />
            <RecentBlogs />
            <Footer />
          </>
        } /> {/* alias for / */}

        {/* Here is the change: collections renders Project */}
        <Route path="/collections" element={<Project />} />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/vendor" element={<VendorRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/bestdetails/:id" element={<BestDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/register" element={<Register />} />

        {/* Category Routes */}
        <Route path="/category/radiance-solar-kit" element={<RadianceSolarKit />} />
        <Route path="/category/solar-module" element={<SolarModule />} />
        <Route path="/category/solar-inverter" element={<SolarInverter />} />
        <Route path="/category/lithium-ion-battery" element={<LithiumIonBattery />} />
        <Route path="/catinverter/:id" element={<CatInverterDetails />} />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
