import React, { useEffect, useState } from "react";
import "./ScreenshotCarousel.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // optional icon
import Modal from "../Modal/index.jsx";

import SS01 from "../../assets/SS01.svg";
import SS02 from "../../assets/SS02.svg";
import SS03 from "../../assets/SS03.svg";
import SS04 from "../../assets/SS04.svg";
import SS05 from "../../assets/SS05.svg";
import SS06 from "../../assets/SS06.svg";
import SS07 from "../../assets/SS07.svg";
import SS08 from "../../assets/SS08.svg";

const ScreenshotCarousel = () => {
  const screenshots = [SS01, SS02, SS03, SS04, SS05, SS06, SS07, SS08];
  const [modalImgIndex, setModalImgIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

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

  const closeModal = () => {
    setModalImgIndex(null);
    setZoom(1);
  };

  const nextImg = () => {
    setModalImgIndex((prev) => (prev + 1) % screenshots.length);
    setZoom(1);
  };

  const prevImg = () => {
    setModalImgIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    setZoom(1);
  };

  return (
    <section id="application" className="screenshot-section" data-aos="fade-up">
      <div className="screenshot-header" data-aos="fade-up">
        {/* <p className="section-subtitle">APP PREVIEW</p> */}
        <h2 className="section-title">APP PREVIEW</h2>
        <p className="section-description">
        Take a closer look at how our app works! Below are some screenshots to give you a glimpse of the features and the seamless experience.
        </p>
      </div>

      <div className="carousel-wrapper">
        <button className="carousel-nav left" onClick={() => scroll("left")}>
          <ChevronLeft size={24} color="#de6f00" />
        </button>

        <div className="carousel-container">
          {screenshots.map((src, index) => (
            <div
              className="screenshot-card"
              key={index}
              onClick={() => setModalImgIndex(index)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={src} alt={`Screenshot ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <button className="carousel-nav right" onClick={() => scroll("right")}>
          <ChevronRight size={24} color="#de6f00" />
        </button>
      </div>

      {modalImgIndex !== null && (
        <Modal
          imgSrc={screenshots[modalImgIndex]}
          zoom={zoom}
          onClose={closeModal}
          onZoomIn={() => setZoom((z) => Math.min(z + 0.25, 3))}
          onZoomOut={() => setZoom((z) => Math.max(z - 0.25, 1))}
          onNext={nextImg}
          onPrev={prevImg}
        />
      )}
    </section>
  );
};

export default ScreenshotCarousel;
