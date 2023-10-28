import React, { useState, useEffect } from "react";
import productsData from "../productList.json";
import Card from "react-bootstrap/Card";

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

  return (
    <div>
      {productsData.products.map((product, index) => (
        <div key={index}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <img
                src={product.images[currentImageIndex]}
                alt={`Product Image ${currentImageIndex + 1}`}
              />
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
