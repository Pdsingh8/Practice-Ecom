import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoMdList } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../assets/images/shoppingCart.png";

const Navbar = ({ cartItemCount, wishlistItemCount }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-gray-100 border-b font-poppins dark:bg-gray-800 dark:border-gray-800">
      <div className="container mx-auto">
        <nav className="flex justify-between">
          <div className="flex items-center justify-between w-full px-4 py-2 lg:px-2">
            <Link to="/" className="text-2xl text-gray-700 dark:text-gray-400">
              <div className="flex items-center">
                <img src={Logo} className="h-12 w-15" alt="e-cart logo" />
                <span className="ml-2 text-xl font-bold">E-Cart</span>
              </div>
            </Link>
            <div className="flex items-center lg:hidden">
              <Link to="/wishlist" className="mr-4 dark:text-gray-400">
                <FaHeart size={20} color="red" />
                {wishlistItemCount > 0 && (
                  <span className="ml-1">{wishlistItemCount}</span>
                )}
              </Link>
              <Link
                to="/addToCart"
                className="flex items-center mr-4 dark:text-gray-400"
              >
                <GrCart size={20} />
                {cartItemCount > 0 && (
                  <span className="ml-1">{cartItemCount}</span>
                )}
              </Link>
              <button
                className="flex items-center px-3 py-2 text-blue-600 border border-blue-200 rounded dark:text-gray-400 hover:text-blue-800 hover:border-blue-300 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <IoMdList size={20} />
              </button>
            </div>
            <ul className="hidden font-medium lg:flex">
              <li className="mr-12">
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-600 dark:text-gray-400"
                >
                  Product
                </a>
              </li>
              <li className="mr-12">
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-600 dark:text-gray-400"
                >
                  Category
                </a>
              </li>
              <li className="mr-12">
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-600 dark:text-gray-400"
                >
                  Collection
                </a>
              </li>
              <li className="mr-12">
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-600 dark:text-gray-400"
                >
                  Brand
                </a>
              </li>
            </ul>
            <div className="items-center hidden max-w-xs py-2 pl-4 bg-white rounded-lg dark:text-gray-300 dark:bg-gray-600 lg:flex">
              <BiSearch size={30} />

              <input
                type="text"
                className="w-full py-2 pl-3 border-0 dark:text-gray-300 dark:bg-gray-600"
                placeholder="Search..."
              />
              <div className="pr-4">
                <select
                  name=""
                  id=""
                  className="pl-3 pr-4 border-0  border-gray-400 cursor-pointer dark:bg-gray-600"
                >
                  <option value="">All items</option>
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                  <option value="">Option 2</option>
                  <option value="">Option 2</option>
                  <option value="">Option 2</option>
                  <option value="">Option 2</option>
                </select>
              </div>
            </div>
            <div className="items-center justify-end hidden lg:flex dark:text-gray-400">
              <Link to="/wishlist" className="mr-4 dark:text-gray-400">
                <FaHeart size={20} color="red" />
                {wishlistItemCount > 0 && (
                  <span className="ml-1">{wishlistItemCount}</span>
                )}
              </Link>
              <Link
                to="/addToCart"
                className="flex items-center mr-4 dark:text-gray-400"
              >
                <GrCart size={20} color="cyan" />
                {cartItemCount > 0 && (
                  <span className="ml-1">{cartItemCount}</span>
                )}
              </Link>
              <a
                href="#"
                className="items-center hidden pl-6 text-sm font-semibold lg:flex dark:text-gray-400"
              >
                <BsPerson size={20} color="yellow" />
              </a>
            </div>
          </div>
        </nav>
        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 w-full bg-gray-800 opacity-25 lg:hidden dark:bg-gray-400 ${
            open
              ? "translate-x-0 ease-in-opacity-100"
              : "-translate-x-full ease-out opacity-0"
          }`}
        />
        <div
          className={`absolute inset-0 z-10 h-screen p-3 text-gray-700 duration-500 transform shadow-md dark:bg-gray-800 bg-blue-50 w-80 lg:hidden lg:transform-none lg:relative ${
            open
              ? "translate-x-0 ease-in-opacity-100"
              : "-translate-x-full ease-out opacity-0"
          }`}
        >
          <div className="flex justify-between">
            <a className="p-2 text-2xl font-bold dark:text-gray-400" href="#">
              Logo
            </a>
            <button
              className="p-2 rounded-md hover:text-blue-300 lg:hidden dark:text-gray-300"
              onClick={() => setOpen(false)}
            >
              <FaTimes size={20} color="currentColor" />
            </button>
          </div>
          <ul className="mt-6">
            <li className="mb-2">
              <a
                href="#"
                className="block p-2 text-lg font-semibold text-gray-300 bg-blue-500 rounded-md dark:bg-gray-700 dark:text-gray-400"
              >
                Home
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="block p-2 text-lg font-semibold text-gray-300 hover:bg-blue-500 rounded-md dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Product
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="block p-2 text-lg font-semibold text-gray-300 hover:bg-blue-500 rounded-md dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Category
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="block p-2 text-lg font-semibold text-gray-300 hover:bg-blue-500 rounded-md dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Collection
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="block p-2 text-lg font-semibold text-gray-300 hover:bg-blue-500 rounded-md dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Brand
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
