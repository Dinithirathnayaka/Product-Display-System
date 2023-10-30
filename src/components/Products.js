import React, { useState, useEffect } from "react";
import productsData from "../productList.json";
import ProductsDetails from "./ProductsDetails";
import Loading from "../assets/load.gif";

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const productsPerScroll = 4;
  const initialLoadCount = 8;

  const productsInRows = [];
  for (let i = 0; i < productsData.products.length; i += 4) {
    const row = productsData.products.slice(i, i + 4);
    productsInRows.push(row);
  }

  useEffect(() => {
    const loadInitialProducts = () => {
      const initialProducts = productsData.products.slice(0, initialLoadCount);
      setVisibleProducts(initialProducts);
    };

    loadInitialProducts();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      visibleProducts.length < productsData.products.length
    ) {
      setLoading(true);

      setTimeout(() => {
        const currentLength = visibleProducts.length;

        if (currentLength <= productsData.products.length) {
          const newProducts = productsData.products.slice(
            currentLength,
            currentLength + productsPerScroll
          );

          setVisibleProducts(() => [...visibleProducts, ...newProducts]);
        }
        setLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleProducts]);

  return (
    <div className="bg-slate-100 pt-1  pl-10 pr-10">
      <h3 className="text-center text-size1 font-semibold text-sky-800 mb-3 mt-3">
        Product Details
      </h3>
      <hr className="text-sky-800 mb-3" />

      <div className="flex flex-wrap m-3 justify-between pl-10 pr-10">
        {visibleProducts.map((product, index) => (
          <div key={index} className="m-customm1 p-customp1">
            <ProductsDetails product={product} />
          </div>
        ))}
      </div>
      {loading && <div className="loader">Loading...</div>}
    </div>
  );
};

export default Products;
