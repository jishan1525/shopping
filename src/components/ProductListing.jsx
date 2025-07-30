import React, { useContext } from "react";
import NavigationBar from "./NavigationBar";




const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    isAdded:false
  },
  {
    id: 2,
    name: "Smartphone Stand",
    price: 499,
    isAdded:false
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1499,
    isAdded:false
  },
  {
    id: 4,
    name: "USB-C Charging Cable",
    price: 299,
    isAdded:false
  },
  {
    id: 5,
    name: "Laptop Backpack",
    price: 1899,
    isAdded:false
  },
  {
    id: 6,
    name: "Notebook & Pen Set",
    price: 249,
    isAdded:false
  },
  {
    id: 7,
    name: "LED Desk Lamp",
    price: 1099,
    isAdded:false
  },
  {
    id: 8,
    name: "Fitness Tracker",
    price: 3499,
    isAdded:false
  },
];

const ProductListing = () => {
  

  const handleAddToCart = (product) => {
    product.isAdded = (!product.isAdded)
    }


  return (
    <>
      <NavigationBar />
      <h1 className="text-center mt-4">Product Listing</h1>

      <div className="container mt-4">
        <div className="row">
          {products.map((product) => {

            return (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">₹{product.price}</p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`btn ${isAdded ? "btn-success" : "btn-primary"}`}
                    >
                      {isAdded ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductListing;
