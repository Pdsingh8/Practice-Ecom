// WishlistPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const WishlistPage = ({ wishlistItems }) => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul className="list-disc pl-4 flex gap-8 m-6 mb-5 ">
          {wishlistItems.map((item) => (
            <li key={item.id} className="mb-4">
              <img className="w-60 h-50 object-cover mr-6" src={item.url} alt={item.ProductName} />
              <div className="inline-block">
                <h2 className="text-lg font-bold">{item.ProductName}</h2>
                <p className="text-gray-700">{item.CompName}</p>
                <p className="text-green-500 font-bold">
                  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price)}
                </p>
                <Link to="/checkout" className="text-blue-500">
                  Buy Now
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;
