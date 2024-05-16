/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function deneme() {
      const res = await fetch("/api/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    }
    deneme();
  }, []); // bu component her render oldugunda(products degisitignde useState) burasida render olur

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}

export { ProductsProvider, useProducts };
