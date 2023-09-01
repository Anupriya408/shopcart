import React, { useState } from 'react';
import CartItem from './CartItem';

function Cart() {
  const [cart, setCart] = useState([]);

  const decreaseQuantity = (itemToRemove) => {
    
    const updatedCart = cart.map((item) =>
      item.Name === itemToRemove.Name
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const increaseQuantity = (itemToIncrease) => {
    
    const updatedCart = cart.map((item) =>
      item.Name === itemToIncrease.Name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = (itemToRemove) => {
    // Implement logic to remove the item from the cart
    // Filter out the item to be removed from the cart state
    const updatedCart = cart.filter((item) => item.Name !== itemToRemove.Name);
    setCart(updatedCart);
  };

  return (
    <div>
      {cart.length === 0 ? (
        <p>No products added</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.Name}
              item={item}
              decreaseQuantity={() => decreaseQuantity(item)}
              increaseQuantity={() => increaseQuantity(item)}
              removeFromCart={() => removeFromCart(item)}
            />
          ))}
         
        </div>
      )}
    </div>
  );
}

export default Cart;
