import React, { useState, useEffect } from 'react';
import './Hero.css'; // Import your CSS file

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start from div1

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex % 5) + 1); // Loop through div1 to div15
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const imagePath = process.env.PUBLIC_URL + `/images/div${currentSlide}.webp`;

  return (
    <div className="hero">
      <img
        src={imagePath}
        alt={`Slide ${currentSlide}`}
        onError={() => console.error(`Error loading image: ${imagePath}`)}
      />
      <div className="shop-now-button">
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
