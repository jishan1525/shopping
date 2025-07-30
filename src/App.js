import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import CartContext from './contexts/CartContext';
import { useState } from 'react';


function App() {


const [cart,setCart] = useState([]);
  return (
    <div className="App">
      
        <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productListing" element={<ProductListing />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
      </CartContext.Provider>
        
    </div>
  );
}

export default App;
