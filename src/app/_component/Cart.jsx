"use client"
import Image from "next/image";
import React, { useState } from "react";

const Cart = ({ cartCount, cartItems, setCartItems, setCartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    const updatedCartCount = updatedCartItems.reduce((total, item) => total + item.quantity, 0);
    setCartItems(updatedCartItems);
    setCartCount(updatedCartCount);
  };


  return (
  <>
     <div className="relative">
      <div className="cursor-pointer" onClick={toggleCart}>
        <Image src="/icon-cart.svg" width={20} height={20} />
        {cartCount > 0 && (
          <span className="absolute -top-3 -right-4 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-orange rounded-full">
            {cartCount}
          </span>
        )}
      </div>
      {isOpen && (
        // for the big screen
        <div className="absolute  -right-20 mt-4 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4">
            <h2 className="text-lg font-bold">Cart</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <Image src="/image-product-1-thumbnail.jpg" width={50} height={50} alt="Product Thumbnail" />
                    <div>
                      <h3 className="text-sm font-bold">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        ${item.price.toFixed(2)} x {item.quantity}{" "}
                        <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer" onClick={() => removeItem(item.id)}>
                    <Image src="/icon-delete.svg" width={20} height={20} alt="Remove Item" />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center  mx-5 my-5 font-semibold text-grayish-blue">Your cart is empty.</p>
            )}
            {cartItems.length > 0 && (
              <button className="w-full py-2 mt-4 bg-orange text-white font-bold rounded-lg">
                Checkout
              </button>
            )}
          </div>
        </div>

        // for small screen

        
      )}
    </div>
  </>
   
  );
};

export default Cart;
