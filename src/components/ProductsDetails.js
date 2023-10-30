import React, { useState, useEffect } from "react";

function ProductsDetails(props) {
  const { name, price, quantity, images } = props.product;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(imageTimer);
    };
  }, [currentImageIndex]);

  return (
    <div className="bg-white pt-2 pb-2 w-customw2 rounded-lg">
      <img
        src={images[currentImageIndex]}
        alt={name}
        className="rounded-lg ml-auto mr-auto w-customw1 h-customh1 transform origin-center hover:scale-95 transition-transform duration-400 "
      />
      <h2 className="text-center font-bold m-2">{name}</h2>
      <p className="text-center text-base text-red-600">${price}</p>
      <p className="text-center text-xs font-mono">
        Quantity: <span className="font-semibold">{quantity}</span>
      </p>
    </div>
  );
}

export default ProductsDetails;
