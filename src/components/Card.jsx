import React from "react";
import { FaHeart } from "react-icons/fa";

const Card = ({
  id,
  url,
  CompName,
  ProductName,
  price,
  priceOff,
  onAddToCart,
  onAddToWishlist,
}) => {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);

  return (
    <div className="relative">
      <div className="flex flex-wrap relative">
        <div className="w-72 mx-4 my-4 overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 relative">
          <img className="w-full h-48 object-cover" src={url} alt="Product" />
          <div className="px-4 py-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-bold text-lg mb-1">{CompName}</div>
                <p className="text-gray-700 text-base mb-1">{ProductName}</p>
                <div className="flex items-center mb-2">
                  <p className="text-gray-600 mr-2">Rating:</p>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span>☆</span>
                </div>
                <p className="text-green-500 text-base">
                  Price: {formattedPrice}
                </p>
                {priceOff && (
                  <p className="text-gray-700 text-base">
                    Discount: <span className="line-through">{priceOff}</span>
                  </p>
                )}
              </div>
              <div className="absolute top-0 right-0 flex space-x-2">
                <button
                  onClick={(e) => {
                    e.preventDefault(); 
                    onAddToWishlist({ id, CompName, ProductName, price, url });
                  }}
                  className="text-red-500"
                >
                  <FaHeart size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
