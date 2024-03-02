// ProductDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = ({ products, onAddToCart, onAddToWishlist }) => {
  const { id } = useParams();
  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const formattedPrice = `₹${selectedProduct.price.toFixed(2)}`;

  return (
    <div className="container mx-auto p-8 flex">
      {/* Product Image */}
      <div className="w-1/2">
        <img
          className="mb-4 rounded-lg w-full"
          src={selectedProduct.url}
          alt={selectedProduct.ProductName}
        />
      </div>

      {/* Product Content */}
      <div className="w-1/2">
        <div className="max-w-2xl bg-white p-8 rounded shadow-md">
          <h1 className="text-3xl font-semibold mb-2">
            {selectedProduct.ProductName}
          </h1>
          {/* User Reviews (Static) */}
          <div className="flex items-center mb-2">
            <p className="text-gray-600 mr-2">Rating:</p>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span>☆</span>
          </div>
          <p className="text-gray-600 mb-4">{selectedProduct.CompName}</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold text-blue-500">
              {formattedPrice}
            </span>
          </div>

          <div className="text-sm text-gray-500">
            {selectedProduct.priceOff && (
              <p>
                Discount:{" "}
                <span className="line-through">
                  ₹{selectedProduct.priceOff.toFixed(2)}
                </span>
              </p>
            )}
          </div>
          <p className="text-gray-500 mt-4">SKU: {selectedProduct.id}</p>
          <p className="text-gray-600 mt-4">{selectedProduct.description}</p>

          {/* Size Option */}
          <div className="mb-4">
            <label className="text-gray-600">Size:</label>
            <select className="ml-2 p-2 border rounded">
              <option value="xl">small</option>
              <option value="l">medium</option>
              <option value="m">large</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() =>
                onAddToCart(selectedProduct)
              }
              className="text-white bg-gray-700 p-2 rounded-md px-4 mx-16"
            >
              Add to Cart
            </button>
            <button
              onClick={() =>
                onAddToWishlist(selectedProduct)
              }
              className="bg-red-500 text-gray-700 px-4 py-2 rounded w-40"
            >
              Add Wish List
            </button>
          </div>
          <button className="bg-primeColor text-white px-4 py-2 rounded w-80">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
