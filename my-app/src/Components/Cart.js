import React, { useState } from 'react';
import CartItem from './CartItem';

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

  return (
    <div>
      {cart.length === 0 ? (
        <p>No products added</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.Name} item={item} />
          ))}
          <p>Total: ${calculateTotal()}</p>
          <p>Estimated Delivery Date: {calculateDeliveryDate()}</p>
          <button onClick={checkout}>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;

