import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState();

  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ cartItems,products, addProduct ,setCartItems}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
