import React, { useState } from 'react';

function Product({ product }) {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    
    setQuantity(1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <img src={`/images/${product.Image}`} alt={product.Name} />
      <h2>{product.Name}</h2>
      <p>Weight: {product.Weight}</p>
      <p>Price: ${product.Price}</p>
      {quantity === 0 ? (
        <button onClick={addToCart}>Add to Cart</button>
      ) : (
        <div>
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
      )}
    </div>
  );
}

export default Product;
