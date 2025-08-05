import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import CartPage from './components/cartPage';
import NavigationBar from './components/NavigationBar';

function App() {



  return (
    <div className="App">
      
        <NavigationBar /> 
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/cart" element={<CartPage />} />
       
      </Routes>
     
        
    </div>
  );
}

export default App;
