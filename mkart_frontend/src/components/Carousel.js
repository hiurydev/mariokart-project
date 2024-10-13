import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ characters, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % characters.length;
    setSelectedIndex(nextIndex);
    onSelect(characters[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = (selectedIndex - 1 + characters.length) % characters.length;
    setSelectedIndex(prevIndex);
    onSelect(characters[prevIndex]);
  };

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={handlePrevious}>{"<"}</button>
      <img src={characters[selectedIndex].GIF} alt={characters[selectedIndex].Nome} className="carousel-image" />
      <button className="carousel-button right" onClick={handleNext}>{">"}</button>
    </div>
  );
};

export default Carousel;
