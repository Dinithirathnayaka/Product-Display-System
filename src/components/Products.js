import React, { useState, useEffect } from "react";
import productsData from "../productList.json";
import ProductsDetails from "./ProductsDetails";
import ClipLoader from "react-spinners/ClipLoader";

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
      }, 2000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleProducts]);

  return (
    <div className="bg-slate-100 relative">
      <hr />

      <h3 className="  rounded-lg text-center text-size1 font-semibold text-blue-800 bg-gradient-to-r from-cyan-200 to-blue-300 py-5 mx-10 mb-5 mt-5 border border-cyan-400">
        Product Details
      </h3>

      <div className=" pt-1 pl-10 pr-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:justify-between">
        {visibleProducts.map((product, index) => (
          <div key={index} className="">
            <ProductsDetails product={product} />
          </div>
        ))}
        {loading && (
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center mt-5">
            <ClipLoader color="#71717a" size={35} className="mb-[-3rem]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
