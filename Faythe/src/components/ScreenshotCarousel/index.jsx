import React, { useEffect } from "react";
import "./ScreenshotCarousel.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FeaturesImage from "../../assets/Features.png";

const ScreenshotCarousel = () => {
  const screenshots = new Array(8).fill(FeaturesImage);

  const scroll = (direction) => {
    const container = document.querySelector(".carousel-container");
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const container = document.querySelector(".carousel-container");

    const interval = setInterval(() => {
      if (container) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        const isAtEnd = container.scrollLeft >= maxScrollLeft - 10;

        if (isAtEnd) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="application"className="screenshot-section">
      <div className="screenshot-header">
        <p className="section-subtitle">SCREENSHOTS</p>
        <h2 className="section-title">Simple & Beautiful Interface</h2>
        <p className="section-description">
          Unleash the power of our platform with a multitude of powerful features,
          empowering you to achieve your goals.
        </p>
      </div>

      <div className="carousel-wrapper">
        <button className="carousel-nav left" onClick={() => scroll("left")}>
          <ChevronLeft size={20} />
        </button>

        <div className="carousel-container">
          {screenshots.map((src, index) => (
            <div className="screenshot-card" key={index}>
              <img src={src} alt={`Screenshot ${index + 1}`} />
            </div>
          ))}
        </div>

        <button className="carousel-nav right" onClick={() => scroll("right")}>
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default ScreenshotCarousel;
