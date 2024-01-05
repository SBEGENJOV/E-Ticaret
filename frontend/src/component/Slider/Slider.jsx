import { useState } from "react";
import "./Slider.css";
import SliderItem from "./SliderItem";

const Sliders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); //veritabanından gelen resimlerin lenght al
    //! setCurrentSlide((prevSlide) => (prevSlide + 1) % data.lenght);
    //setCurrentSlide((prevSlide) => (prevSlide + 1) % 3 buaraya kaçtane resim varsa o kadar sayı gelecek);)
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
    //! setCurrentSlide((prevSlide) => (prevSlide - 1 + data.lenght) % data.lenght);
    //setCurrentSlide((prevSlide) => (prevSlide - 1 + 3 aynı şekilde kaç tane resim gelecekse o sayı eklenecek) % 3 buaraya kaçtane resim varsa o kadar sayı gelecek);
  };

  return (
    <section className="slider">
      <div className="slider-elements">
        {/* {SliderItem.map((slide) => {
          {
            currentSlide === 0 && (
              <SliderItem imageSrc={slide.img} />
            );
          }
        })} */}
        {currentSlide === 0 && <SliderItem imageSrc="img/slider/slider1.jpg" />}
        {currentSlide === 1 && <SliderItem imageSrc="img/slider/slider2.jpg" />}
        {currentSlide === 2 && <SliderItem imageSrc="img/slider/slider3.jpg" />}
        <div className="slider-buttons">
          <button onClick={prevSlide}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button onClick={nextSlide}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <div className="slider-dots">
          <button
            className={`slider-dot ${currentSlide === 0 ? "active" : ""}`}
            onClick={() => setCurrentSlide(0)}
          >
            <span></span>
          </button>
          <button
            className={`slider-dot ${currentSlide === 1 ? "active" : ""}`}
            onClick={() => setCurrentSlide(1)}
          >
            <span></span>
          </button>
          <button
            className={`slider-dot ${currentSlide === 2 ? "active" : ""}`}
            onClick={() => setCurrentSlide(2)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sliders;
