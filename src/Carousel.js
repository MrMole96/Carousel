import React from "react";
import { useEffect, useState } from "react";

import "./Carousel.css";

const Carousel = ({ delay, children }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    const startInterval = () =>
      setInterval(() => {
        setSlideIndex((currentIndex) => {
          if (currentIndex === children.length - 1) return 0;
          return currentIndex + 1;
        });
      }, delay);

    intervalId = startInterval();

    const cleanup = () => clearInterval(intervalId);

    return cleanup;
  });

  return (
    <div className="carousel">
      <div>{children[slideIndex]}</div>
      <div className="buttons">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
