import React from 'react'
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import { testimonals } from '@/StaticContent/testimonials-En.js';
import NextArrow from '@Navigation/NextArrow.jsx';
import PrevArrow from '@Navigation/Prevarrow.jsx';
import "slick-carousel/slick/slick.css";
import "./styles/testimonials.scss";

function Testimonals() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    lazyLoad: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <Fade>
      <section className="testimonals--section">
        <h2>Testimonials</h2>
        <div className="slider-wrapper">
          <Slider {...settings}>
            {testimonals.map((testimonial, index) => {
              return (
                <div className="testi-item-wrapper" key={index}>
                  <div className="testi-item">
                    <blockquote>
                      {testimonial.quote}
                    </blockquote>
                    <cite>{testimonial.src}</cite>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>

      </section>
    </Fade>
  )
}

export default Testimonals
