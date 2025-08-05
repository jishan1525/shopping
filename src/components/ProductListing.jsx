import React, { useContext } from "react";
import { ProductContext } from "../ProductContext";

const ProductListing = () => {
  const { products, toggleAddToCart } = useContext(ProductContext);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product Listing</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div
              className={`card h-100 shadow-sm border ${
                product.isAdded ? "border-success bg-light" : ""
              }`}
            >
              <div className="card-body">
                <h5
                  className={`card-title fw-bold ${
                    product.isAdded ? "text-muted text-decoration-line-through" : ""
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

                {product.isAdded ? (
                  <button
                    className="btn btn-danger mt-2 w-100"
                    onClick={() => toggleAddToCart(product.id)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="btn btn-primary mt-2 w-100"
                    onClick={() => toggleAddToCart(product.id)}
                  >
                    Add to Cart
                  </button>
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
  );
};

export default ProductListing;