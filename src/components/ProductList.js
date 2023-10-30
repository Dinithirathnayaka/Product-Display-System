import React, { useState, useEffect } from "react";
import productsData from "../productList.json";

function ProductList() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(imageTimer);
    };
  }, [currentImageIndex]);

  const productsInRows = [];
  for (let i = 0; i < productsData.products.length; i += 4) {
    const row = productsData.products.slice(i, i + 4);
    productsInRows.push(row);
  }

  return (
    <div className=" h-customh4 bg-gradient-to-r from-blue-300 to-fuchsia-300 min-h-screen flex items-center pt-5 pb-5">
      <div className="h-customh1 w-customw1 overflow-y-auto scrollbar-none ml-auto mr-auto">
        {productsInRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap h-customh2 mt-2 mb-2">
            {row.map((product, index) => (
              <div
                key={index}
                className="w-customw2 p-1 m-auto border border-blue-500 rounded-lg bg-white z-customz1 hover:w-customw4 hover:mt-2 hover:mb-2 hover:shadow-2xl"
              >
                <img
                  src={product.images[currentImageIndex]}
                  alt={`Product Image ${currentImageIndex + 1}`}
                  className="w-customw3 ml-auto mr-auto h-customh3 rounded-lg"
                />
                <hr className="bg-blue-500" />
                <h3 className="text-blue-500 text-center font-semibold bg-blue-100">
                  {product.name}
                </h3>
                <p className="text-center text-sm ">Rs: {product.price}</p>
                <p className="text-center text-sm">
                  Quantity: {product.quantity}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
