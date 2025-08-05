import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './ProductContext'; // ✅ Import your context provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider> {/* ✅ Wrap App inside this */}
        <App />
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();