import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos, MdArrowForwardIos, MdOutlineShare } from "react-icons/md";

import { SliderData } from './SliderData';
import "../styles/Gp_circuit_card.css";
import "../styles/Gp_circuit_carrousel.css";


const GpCircuitsSlider = ({ slides }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <MdArrowBackIos className='left-arrow' onClick={prevSlide} />
      <MdArrowForwardIos className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {

        const navigate = useNavigate();
        const onNavigateHandler = () => navigate(slide.route);

        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}>
            {index === current && (
            <div className="carousel-wrapper">
                <div className="map-wrapper">
                    <span><MdOutlineShare/></span>
                    <img src={slide.map} alt='circuit en groupe' className='map' />
                    <div className='title-wrapper'><h1>{slide.title}</h1></div>
                </div>
                <div className="information-wrapper">
                    <h2> Départ: {slide.departure}</h2>
                    <h2> Date: {slide.date}</h2>
                    <h2> Participants: {slide.Subscribers}/{slide.totalNumber}</h2>
                </div>
                <div className="btn"  onClick={onNavigateHandler}>En savoir plus</div>
                <div className="gp_counter"><h1>{SliderData.indexOf(slide)+1}/{SliderData.length}</h1></div>
            </div>
            
            )}
          </div>
        );
      })}
    </section>
  );
};

export default GpCircuitsSlider;