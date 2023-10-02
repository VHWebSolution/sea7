import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import FloatingWhatsAppButton from './Components/FloatingZap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <FloatingWhatsAppButton />
    <Footer />
  </React.StrictMode>
);
