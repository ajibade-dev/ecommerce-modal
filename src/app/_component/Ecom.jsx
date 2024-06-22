"use client"

import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const Ecom = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (quantity, item) => {
    setCartCount((prevCount) => prevCount + quantity);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

  return (
    <div>
      <Navbar cartCount={cartCount} cartItems={cartItems} setCartItems={setCartItems} setCartCount={setCartCount} />
      <Hero addToCart={addToCart} />
    </div>
  );
};

export default Ecom;
