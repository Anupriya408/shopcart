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
  const productStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '20px',
    maxWidth: '300px',
    display: 'inline-block',
    marginRight: '10px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  const buttonStyle = {
    background: 'blue',
    color: 'white',
    padding: '10px 10px',
    border: 'black',
    cursor: 'pointer',
  };

  return (
    <div style={productStyle}>
      <img src={product.Image} alt={product.Name} style={imageStyle} />
      <h2>{product.Name}</h2>
      <p>Weight: {product.Weight}</p>
      <p>Price: ${product.Price}</p>
      {quantity === 0 ? (
        <button style={buttonStyle} onClick={addToCart}>
          Add to Cart
        </button>
      ) : (
        <div>
          <button style={buttonStyle} onClick={decreaseQuantity}>
            -
          </button>
          <span>{quantity}</span>
          <button style={buttonStyle} onClick={increaseQuantity}>
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default Product;






