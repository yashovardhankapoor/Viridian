import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem.js";
import "./Carousel.css";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Baseball",
      description: (
        <em>
          "Thanks to Viridian, I know the best prices for all my medicines."
        </em>
      ),
      img: require("./img1.jpg"),
    },
    {
      title: "Walking",
      description: (
        <em>
          "Viridian has made it possible for me to have relaxing vacations with
          my beautiful wife."
        </em>
      ),
      img: require("./img2.jpg"),
    },
    {
      title: "Weights",
      description: (
        <em>
          "Viridian has helped me plan out the rest of my life. Now I can enjoy
          playing chess with my grandson without a care."
        </em>
      ),
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
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
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
        <div className="indicators">
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
        </div>
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
