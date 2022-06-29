import React from 'react';
import { useState } from 'react';
import { MdArrowForwardIos, MdOutlineShare } from "react-icons/md";

import "../styles/Gp_shops_cards.css"

// Slides de chaque commerce d'un circuit donné (selon sa route) sur la page de description d'un circuit
const GpShopsSlider = ({ slides }) => {

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
      <section className='sh-slider'>
        
        {slides.map((slide, index) => {
          if(slide.zone === 12) {

            return (
              <div
                className={index === current ? 'sh-slide sh-active' : 'sh-slide'}
                key={index}>
                {index === current && (
               
                <div className="sh-carousel-wrapper">
                    <div className="sh-map-wrapper">
                        <span><MdOutlineShare/></span>
                        <img src={slide.image} alt='circuit en groupe' className='sh-map' />
                        <div className='sh-title-wrapper'><h1>{slide.title}</h1></div>
                    </div>
                    <div className="sh-information-wrapper">
                        <h2> Passage à {slide.step}</h2>
                        <h2> Description: {slide.description}</h2>
                        <h2> Horaires: {slide.time}</h2>
                    </div>
                    <a className="sh-btn"  href={slide.route}>Site web</a>
                    <div className="arrows-wrapper">
                    <MdArrowForwardIos className='sh-left-arrow' onClick={prevSlide} />
                    <MdArrowForwardIos className='sh-right-arrow' onClick={nextSlide} />
                    </div>
                    
                </div>

                      )}        
            </div>
          );

          }
          
        })}
     
      </section>
    );
  };
  
  export default GpShopsSlider;