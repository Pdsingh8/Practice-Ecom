import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddToCartPage = ({ cartItems }) => {
  // Function to calculate the total amount in the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const [count, setCount] = useState(1)

  const incrementCount =() =>{
    setCount( count + 1);
  }

  const decrementCount = () => {
    setCount (count - 1);
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="min-w-full border border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 text-left">Product</th>
                <th className="py-2 px-4 text-left">Company</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Quantity</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="py-4">
                    <div className="flex items-center">
                      <img className="w-16 h-16 object-cover mr-4" src={item.url} alt={item.ProductName} />
                      <div>
                        <h2 className="text-lg font-bold">{item.ProductName}</h2>
                        <p className="text-gray-700">{item.CompName}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">{item.CompName}</td>
                  <td className="py-4">
                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price)}
                  </td>
                  <td className="py-4 cursor-pointer"><th className="text-blue-500 ring-2 px-3 py-0.5 rounded-md " onClick={decrementCount}>-</th> 
                  <th className="text-blue-500 ring-2 px-3 py-0.5  rounded-md">{count}</th> 
                  <th className="text-blue-500 ring-2 px-3 py-0.5 rounded-md" onClick={incrementCount}>+</th> </td>
                  <td className="py-4">
                    <Link to="/checkout" className="text-blue-500 ring-2 rounded-sm py-1 px-2">
                      Buy Now
                    </Link>
                  
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-200">
                <td colSpan="3" className="font-bold py-2 px-4">
                  Total Amount
                </td>
                <td colSpan="2" className="font-bold py-2 px-4">
                  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(calculateTotalAmount())}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddToCartPage;
