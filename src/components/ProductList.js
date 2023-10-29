import React, { useState, useEffect } from "react";
import productsData from "../productList.json";

function ProductList() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming there are 3 images per product
    }, 5000);

    return () => {
      clearInterval(imageTimer);
    };
  }, [currentImageIndex]);

  const productsInRows = [];
  for (let i = 0; i < productsData.products.length; i += 3) {
    const row = productsData.products.slice(i, i + 3);
    productsInRows.push(row);
  }

  return (
    <div className="h-customh1 overflow-y-auto pt-10 pb-10 pl-5 pr-5">
      {productsInRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap h-customh2">
          {row.map((product, index) => (
            <div
              key={index}
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-1 m-2 border border-sky-500 rounded-lg"
            >
              <img
                src={product.images[currentImageIndex]}
                alt={`Product Image ${currentImageIndex + 1}`}
                className="w-40 ml-auto mr-auto h-customh3"
              />
              <hr />
              <h3 className="text-sky-400 text-center">{product.name}</h3>
              <p className="text-center">Price: {product.price}</p>
              <p className="text-center">Quantity: {product.quantity}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
