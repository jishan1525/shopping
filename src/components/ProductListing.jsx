import React, { useContext, useState } from "react";
import { ProductContext } from "../ProductContext";


// const initialProducts = [
//   { id: 1, name: "Wireless Headphones", price: 2999, costPrice: 5999, isAdded: false },
//   { id: 2, name: "Smartphone Stand", price: 499, costPrice: 999, isAdded: false },
//   { id: 3, name: "Bluetooth Speaker", price: 1499, costPrice: 3999, isAdded: false },
//   { id: 4, name: "USB-C Charging Cable", price: 299, costPrice: 999, isAdded: false },
//   { id: 5, name: "Laptop Backpack", price: 1899, costPrice: 3999, isAdded: false },
//   { id: 6, name: "Notebook & Pen Set", price: 249, costPrice: 399, isAdded: true },
//   { id: 7, name: "LED Desk Lamp", price: 1099, costPrice: 1999, isAdded: false },
//   { id: 8, name: "Fitness Tracker", price: 3499, costPrice: 4999, isAdded: true },
// ];

const ProductListing = () => {
 const { products, toggleAddToCart } = useContext(ProductContext);


  return (
    <>
     
      <div className="container mt-5">
        <h1 className="text-center mb-4">Product Listing</h1>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <div key={product.id} className="col">
              <div
                className={`card h-100 shadow-sm border ${
                  product.isAdded ? "border-success bg-light" : ""
                }`}
                onClick={() => toggleAddToCart(product.id)}
                style={{ cursor: "pointer" }}
              >
                <div className="card-body">
                  <h5
                    className={`card-title fw-bold ${
                      product.isAdded ? "text-decoration-line-through text-muted" : ""
                    }`}
                  >
                    {product.name}
                  </h5>

                  <p className="card-text mb-1">
                    <span className="text-primary fw-semibold me-2">
                      ₹{product.price}
                    </span>
                    <span className="text-muted text-decoration-line-through">
                      ₹{product.costPrice}
                    </span>
                  </p>

                  {product.isAdded && (
                    <span className="badge bg-success mt-2">Added</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="alert alert-info text-center mt-5" role="alert">
          <strong>Total Added Products:</strong>{" "}
          <span className="fw-bold">
            {products.filter((product) => product.isAdded).length}/{products.length}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductListing;