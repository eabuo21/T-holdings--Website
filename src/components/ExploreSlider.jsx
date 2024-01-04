import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/slider.css";
import SliderImg1 from "../assets/Images/sliderimg/SliderImg1.png";
import SliderImg2 from "../assets/Images/sliderimg/SliderImg2.png";
import SliderImg3 from "../assets/Images/sliderimg/SliderImg3.png";

const ExploreSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideWidth = document.querySelector(".slide").offsetWidth;

  useEffect(() => {
    // Set initial position of slides
    const slides = document.querySelector(".slides");
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  }, [slideIndex, slideWidth]);

  // Transition to next slide
  const nextSlide = () => {
    let index = slideIndex + 1;
    if (index >= 6) {
      index = 0;
    }
    setSlideIndex(index);
    transitionSlide();
  };

  // Transition to previous slide
  const prevSlide = () => {
    let index = slideIndex - 1;
    if (index < 0) {
      index = 5;
    }
    setSlideIndex(index);
    transitionSlide();
  };

  // Transition slide
  const transitionSlide = () => {
    const slides = document.querySelector(".slides");
    slides.style.transition = "transform 0.7s ease-in-out";
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  };

  // Auto slide every 9 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 9000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div className="slider">
      <div className="slides">
        <div className="slide">
          <img src={SliderImg1} alt="imageno1" />
          <img src={SliderImg2} alt="imageno1" />
          <img src={SliderImg3} alt="imageno1" />
        </div>
        <div className="slide">
          <img src={SliderImg2} alt="imageno2" />
          <img src={SliderImg3} alt="imageno2" />
          <img src={SliderImg1} alt="imageno2" />
        </div>
        <div className="slide">
          <img src={SliderImg2} alt="imageno3" />
          <img src={SliderImg1} alt="imageno3" />
          <img src={SliderImg3} alt="imageno3" />
        </div>
        <div className="slide">
          <img src={SliderImg1} alt="imageno1" />
          <img src={SliderImg2} alt="imageno1" />
          <img src={SliderImg3} alt="imageno1" />
        </div>
        <div className="slide">
          <img src={SliderImg3} alt="imageno2" />
          <img src={SliderImg2} alt="imageno2" />
          <img src={SliderImg1} alt="imageno2" />
        </div>
        <div className="slide">
          <img src={SliderImg2} alt="imageno3" />
          <img src={SliderImg1} alt="imageno3" />
          <img src={SliderImg1} alt="imageno3" />
        </div>
      </div>
      <button className="prev" onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} className="arrow-left" />
      </button>
      <button className="next" onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} className="arrow-right" />
      </button>
    </div>
  );
};

export default ExploreSlider;
