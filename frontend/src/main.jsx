import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // Tailwind CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; // ✅ Slick Carousel styles (MUST be above render)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
