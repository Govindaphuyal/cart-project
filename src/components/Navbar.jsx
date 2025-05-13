import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/productContext';

import { FaCartPlus } from "react-icons/fa6";
const Navbar = () => {
    const { cartItems } = useContext(ProductContext); 
    const[cart,setCart]=useState(false)
    const handleClick=()=>{
          setCart(!cart)
    }
  return (
    <>
    <header className="inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link to="/add" className="flex items-center">
              <img
                className="h-7 w-auto"
                src="https://static.vecteezy.com/system/resources/previews/015/018/215/large_2x/shopping-cart-icon-cartoon-style-vector.jpg"
                alt="Logo"
              />
              <p className="sr-only">Website Title</p>
            </Link>
          </div>

          <div className="flex items-center justify-end gap-3">
            <Link
              className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
              to="/signIn"
            >
              Sign in
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              to="/login"
              >
              Login
            </Link>
            <Link  className="relative flex items-center text-gray-700 hover:text-blue-600">
  <FaCartPlus size={24} onClick={handleClick}/>
  <sup className="text-xs text-white bg-red-500 rounded-full px-1 absolute -top-2 -right-2">{cartItems}</sup>
</Link>
          </div>
        </div>
      </div>
    </header>
    {cart&&<div className='absolute right-100'>

    <section className=" flex justify-end w-70 h-70 bg-gray-100">
  <div className="w-0 mx-auto text-center px-4">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">io</h1>
    <p className="text-lg text-gray-600">
      10
    </p>
  </div>
</section>
    </div>}

</>
  );
};

export default Navbar;
