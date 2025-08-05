import { createContext, useState } from "react";

// Create context
export const ProductContext = createContext();

const initialProducts = [
  { id: 1, name: "Wireless Headphones", price: 2999, costPrice: 5999, isAdded: false },
  { id: 2, name: "Smartphone Stand", price: 499, costPrice: 999, isAdded: false },
  { id: 3, name: "Bluetooth Speaker", price: 1499, costPrice: 3999, isAdded: false },
  { id: 4, name: "USB-C Charging Cable", price: 299, costPrice: 999, isAdded: false },
  { id: 5, name: "Laptop Backpack", price: 1899, costPrice: 3999, isAdded: false },
  { id: 6, name: "Notebook & Pen Set", price: 249, costPrice: 399, isAdded: false },
  { id: 7, name: "LED Desk Lamp", price: 1099, costPrice: 1999, isAdded: false },
  { id: 8, name: "Fitness Tracker", price: 3499, costPrice: 4999, isAdded: false },
];

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  const toggleAddToCart = (id) => {
    const updated = products.map((product) =>
      product.id === id
        ? { ...product, isAdded: !product.isAdded }
        : product
    );
    setProducts(updated);
  };

  return (
    <ProductContext.Provider value={{ products, toggleAddToCart }}>
      {children}
    </ProductContext.Provider>
  );
};