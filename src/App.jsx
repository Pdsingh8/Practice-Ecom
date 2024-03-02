// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AddToCartPage from './components/AddToCartPage';
import WishlistPage from './components/WishlistPage';
import ProductDetails from './components/ProductDetails';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [prodcutItemDetail, setProductItemDetail] = useState([])

  const handleAddToCart = (product) => {
    const updatedCart = [...cartItems, { ...product, quantity: 1 }];
    setCartItems(updatedCart);
  };

  const handleAddToWishlist = (product) => {
    const updatedWishlist = [...wishlistItems, product];
    setWishlistItems(updatedWishlist);
  };


  const products = [
  { id: 1, url: 'https://cdn.pixabay.com/photo/2016/12/26/06/16/i-phone-1931557_1280.jpg', CompName: 'ABC Electronics', ProductName: 'Smartphone X', price: 599.99, priceOff: 50.00, description:'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
  { id: 2, url: 'https://cdn.pixabay.com/photo/2020/01/15/06/36/acer-aspire-5700-4766992_640.jpg', CompName: 'Tech Innovators', ProductName: 'Laptop Pro', price: 1299.99, priceOff: 100.00 , description:'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
  { id: 3, url: 'https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_640.jpg', CompName: 'Fashion Haven', ProductName: 'Stylish Watch', price: 89.99, priceOff: 10.00 , description:'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
  { id: 4, url: 'https://cdn.pixabay.com/photo/2019/04/28/22/00/heating-costs-4164538_640.jpg', CompName: 'Home Essentials', ProductName: 'Smart Thermostat', price: 149.99, priceOff: 15.00 , description:'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
  { id: 5, url: 'https://cdn.pixabay.com/photo/2016/04/12/14/31/backpack-1324445_640.jpg', CompName: 'Outdoor Adventures', ProductName: 'Hiking Backpack', price: 49.99, priceOff: 5.00 , description:'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
  { id: 6, url: 'https://cdn.pixabay.com/photo/2016/12/13/12/37/heart-rate-monitoring-device-1903997_640.jpg', CompName: 'Fitness Gear Co.', ProductName: 'Fitness Tracker', price: 79.99, priceOff: 7.00 , description:'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
  { id: 7, url: 'https://cdn.pixabay.com/photo/2011/12/05/14/51/blender-10935_640.jpg', CompName: 'Kitchen Delights', ProductName: 'Blender Master', price: 39.99, priceOff: 3.00 , description:'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
  { id: 8, url: 'https://cdn.pixabay.com/photo/2017/05/08/02/22/game-2294201_640.jpg', CompName: 'Gaming Galaxy', ProductName: 'Gaming Console X', price: 299.99, priceOff: 30.00 , description:'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
  { id: 9, url: 'https://cdn.pixabay.com/photo/2015/08/17/08/21/book-892136_640.jpg', CompName: 'Bookworm Treasures', ProductName: 'Bestseller Book Set', price: 59.99, priceOff: 6.00 , description:'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
  { id: 10, url: 'https://cdn.pixabay.com/photo/2016/10/16/10/38/color-of-lead-1744817_640.jpg', CompName: 'Artistry Creations', ProductName: 'Canvas Painting Kit', price: 89.99, priceOff: 8.00 , description:'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
  { id: 11, url: 'https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938_640.jpg', CompName: 'Tech Innovators', ProductName: 'Smartphone Pro', price: 699.99, priceOff: 50.00 , description:'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
  { id: 12, url: 'https://cdn.pixabay.com/photo/2016/06/16/16/44/clock-1461689_640.jpg', CompName: 'Fashion Trends', ProductName: 'Designer Watch', price: 129.99, priceOff: 20.00 , description:'Introducing the new and improved KONG Classic Dog Toy! This mentally stimulating toy is made of durable rubber and has an unpredictable bounce for games of fetch. It is great for average chewers and can be stuffed with KONG Easy Treat or Snacks for added fun.' },
  ];



  

  return (
    <Router>
      <div>
        <Navbar cartItemCount={cartItems.length} />
        <Routes>
          <Route
            path="/"
            element={<HomePage products={products} onAddToCart={handleAddToCart} onAddToWishlist={handleAddToWishlist} />}
          />
          <Route path="/addToCart" element={<AddToCartPage cartItems={cartItems}  />} />
          <Route path="/wishlist" element={<WishlistPage wishlistItems={wishlistItems} />} />
          <Route path="/productDetails/:id" element={<ProductDetails products={products} onAddToCart={handleAddToCart} onAddToWishlist={handleAddToWishlist} />} />        
          </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;