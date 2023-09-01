import React, { useState } from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom'; 

function Cart() {
  const [cart, setCart] = useState([]);

  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.Price * item.quantity, 0);
  };

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
      {cart.length === 10 ? (
        <p>No products added</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.Name} item={item} />
          ))}
          <p>Total: ${calculateTotal()}</p>
          <p>Estimated Delivery Date: {calculateDeliveryDate()}</p>
          <Link to="/">
          <button onClick={checkout}>Checkout</button></Link>
        </div>
      )}
    </div>
  );
}

export default Cart;

