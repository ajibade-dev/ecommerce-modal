"use client"

import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import Cart from './Cart';

const Navbar = ({ cartCount, cartItems, setCartItems, setCartCount }) => {
 
    const [nav, setNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  

 
//to open and close the menu in mobile
  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <div className="bg-white flex items-center justify-around md:px-2">
      <div className='flex items-center justify-center'>
        <div onClick={handleNav} className='flex md:hidden mr-6'>
          {!nav ? <Image src="/icon-close.svg" width={15} height={15} className='m-2' /> : <Image src="/icon-menu.svg" className='m-2' width={15} height={15} />}
        </div>
        <Image src="/logo.svg" width={120} height={120} alt="sneakers" className='mr-10' />

        <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-cta">
          <ul className="flex flex-col font-medium text-sm p-4 md:p-0 md:flex-row md:space-x-8">
            <li className='py-10 hover:border-b-orange hover:border-b-4'>
              <a href="#home" className="block text-dark-grayish-blue hover:text-very-dark-blue rounded md:p-0" aria-current="page">Collections</a>
            </li>
            <li className='py-10 hover:border-b-orange hover:border-b-4'>
              <a href="#buy" className="block text-dark-grayish-blue hover:text-very-dark-blue rounded md:p-0 " aria-current="page">Men</a>
            </li>
            <li className='py-10 hover:border-b-orange hover:border-b-4'>
              <a href="#ecosystem" className="block text-dark-grayish-blue hover:text-very-dark-blue md:p-0" aria-current="page">Women</a>
            </li>
            <li className='py-10 hover:border-b-orange hover:border-b-4'>
              <a href="#community" className="block text-dark-grayish-blue hover:text-very-dark-blue md:p-0 " aria-current="page">About</a>
            </li>
            <li className='py-10 hover:border-b-orange hover:border-b-4'>
              <a href="#community" className="block text-dark-grayish-blue hover:text-very-dark-blue rounded md:p-0 " aria-current="page">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className='flex flex-row items-center justify-around gap-5'>
        <div className='cursor-pointer'>
          <Cart cartCount={cartCount} cartItems={cartItems} setCartItems={setCartItems}
          setCartCount={setCartCount}/>
        </div>
        <div className='rounded-full hover:border-orange hover:border-2 transition-all ease-in-out duration-100 cursor-pointer'>
          <Image src="/image-avatar.png" width={40} height={40} />
        </div>
      </div>

      <div className='flex md:hidden z-20 py-10 bg-white'>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full bg-white ease-in-out duration-100 z-30' : 'fixed left-[-100%] ease-out duration-100 z-30'}>
          <div onClick={handleNav} className="flex mt-10 pl-4">
            {!nav ? <Image src="/icon-close.svg" width={15} height={15} className='m-2' /> : 'fixed left-[-100%] ease-out duration-500'}
          </div>
          <ul className='pt-8 pl-4 font-semibold'>
            <li>
              <a href="#home" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 text-lg " aria-current="page">Collections</a>
            </li>
            <li>
              <a href="#buy" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 text-lg " aria-current="page">Men</a>
            </li>
            <li>
              <a href="#ecosystem" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 text-lg " aria-current="page">Women</a>
            </li>
            <li>
              <a href="#community" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 text-lg" aria-current="page">About</a>
            </li>
            <li>
              <a href="#community" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 text-lg" aria-current="page">Contact</a>
            </li>
          </ul>
        </div>
        <div className={`${!nav ? 'fixed inset-0 bg-black opacity-50 z-10' : 'hidden'}`} onClick={handleNav}></div>
      </div>
    </div>
  );
}

export default Navbar