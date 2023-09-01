import React, { useState } from 'react';
import CartItem from './CartItem';
import { useHistory } from 'react-router-dom'; 

function Cart() {
  const [cart, setCart] = useState([]);

  // Define a function to calculate the total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.Price * item.quantity, 0);
  };

  // Define a function to calculate the estimated delivery date
  const calculateDeliveryDate = () => {
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 7); // 7 days from today
    return deliveryDate.toDateString();
  };

  const checkout = () => {
    setCart([]);
  };

  // Define inline CSS styles
  const containerStyle = {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const totalStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginTop: '10px',
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      {cart.length === 10 ? (
        <p>No products added</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.Name} item={item} />
          ))}
          <p style={totalStyle}>Total: ${calculateTotal()}</p>
          <p>Estimated Delivery Date: {calculateDeliveryDate()}</p>
          <button style={buttonStyle} onClick={checkout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;

