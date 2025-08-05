import React, { useContext } from "react";
import { ProductContext } from "../ProductContext";

const CartPage = () => {
  const { products, toggleAddToCart } = useContext(ProductContext);
  const cartItems = products.filter((p) => p.isAdded);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemove = (id) => {
    toggleAddToCart(id); 
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-warning text-center">
          No items added to cart.
        </div>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div key={item.id} className="col-md-4 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Price: ₹{item.price}</p>
                    <p className="card-text text-muted">
                      MRP: <del>₹{item.costPrice}</del>
                    </p>
                    <span className="badge bg-success mb-2">In Cart</span>
                    <br />
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Section */}
          <div className="mt-4 p-3 border rounded bg-light text-center">
            <h4>Checkout</h4>
            <p>Total Items: <strong>{cartItems.length}</strong></p>
            <p>Total Price: <strong>₹{totalPrice}</strong></p>
            <button className="btn btn-primary">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;