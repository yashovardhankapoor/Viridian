import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import "./Carousel.css";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Baseball",
      description:<em>"Thanks to Viridian, I know the best prices for all my medicines."</em>,
      img: require("./img1.jpg"),
    },
    {
      title: "Walking",
      description:<em>"Viridian has made it possible for me to have relaxing vacations with my beautiful wife."</em>,
      img: require("./img2.jpg")
    },
    {
      title: "Weights",
      description:<em>"Viridian has helped me plan out the rest of my life. Now I can enjoy playing chess with my grandson without a care."</em>,
      img: require("./img3.jpg"),
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div className="carouselHeading">TESTIMONIALS</div>
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">←</span>{" "}
        </button>
        {/* <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  🔵
                </span>
              </button>
            );
          })}
        </div> */}
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">→</span>
        </button>
      </div>
    </div>
  );
};


// // src/components/Carousel.js
// import React, { useState } from 'react';
// import { CarouselContainer, Slide, CarouselButton } from './CarouselStyles.js';

// const Carousel = ({ items }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
//   };

//   return (
//     <CarouselContainer>
//       <Slide active={currentIndex === 0}>{items[0]}</Slide>
//       <Slide active={currentIndex === 1}>{items[1]}</Slide>
//       <Slide active={currentIndex === 2}>{items[2]}</Slide>
//       <CarouselButton onClick={prevSlide}>Previous</CarouselButton>
//       <CarouselButton onClick={nextSlide}>Next</CarouselButton>
//     </CarouselContainer>
//   );
// };

// export default Carousel;
