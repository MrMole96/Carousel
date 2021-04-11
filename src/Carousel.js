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
  }, [slideIndex]);

  const prevHandler = () => {
    setSlideIndex((currentIndex) => {
      if (currentIndex === 0) return children.length - 1;
      return currentIndex - 1;
    });
  };

  const nextHandler = () => {
    setSlideIndex((currentIndex) => {
      if (currentIndex === children.length - 1) return 0;
      return currentIndex + 1;
    });
  };

  return (
    <div className="carousel">
      <div>{children[slideIndex]}</div>
      <div className="buttons">
        <button onClick={() => prevHandler()}>Previous</button>
        <button onClick={() => nextHandler()}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
