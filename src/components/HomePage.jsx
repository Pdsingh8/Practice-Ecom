import Card from "./Card";
import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import superOffer from "../assets/images/superOffer.jpg";
import labourOffer from "../assets/images/labourOffer.jpg";
import gameOffer from "../assets/images/gameOffer.jpg";
import watchOffer from "../assets/images/watchOffer.jpg";
import { Link } from "react-router-dom";

const HomePage = ({ products, onAddToCart, onAddToWishlist }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wishlist, setWishlistState] = useState({});

  const slides = [
    { url: superOffer },
    { url: gameOffer },
    { url: labourOffer },
    { url: watchOffer },
  ];
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);
  
  return (
    <>
      <div className="max-w-[1400px] h-[500px] w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-1000"
        ></div>

        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => setCurrentIndex(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-8 ">
        <h1 className="text-3xl font-bold mb-4">Featured Products</h1>
        <div className="grid grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/productDetails/${product.id}`}
              className="cursor-pointer"
            >
              <Card
                key={product.id}
                {...product}
                onAddToCart={onAddToCart}
                onAddToWishlist={onAddToWishlist}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
