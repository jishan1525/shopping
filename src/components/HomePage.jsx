import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
   

      <header className="bg-light py-5 text-center border-bottom">
        <h1 className="display-4 fw-bold px-3">🛍️ Welcome to shopping App</h1>
        <p className="lead text-muted px-3">
          Shop smarter. Explore products and manage your cart with ease.
        </p>
      </header>

      <main className="container my-5">

        
        <section className="p-5 mb-4 bg-primary text-white rounded-3 text-center shadow">
          <h2 className="display-5 fw-bold">🛒 View Products</h2>
          <p className="lead">Click the button below to explore our wide range of products.</p>
          <Link to="/productListing" className="btn btn-outline-light btn-lg mt-3">
            View Products
          </Link>
        </section>

    
        <section className="p-5 bg-dark text-white rounded-3 text-center shadow">
          <h2 className="display-5 fw-bold">🧺 View Your Cart</h2>
          <p className="lead">See what you've added to your cart and proceed to checkout.</p>
          <Link to="/cart" className="btn btn-outline-warning btn-lg mt-3">
            View Cart
          </Link>
        </section>

      </main>
    </div>
  );
};

export default HomePage;
