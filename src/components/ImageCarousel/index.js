import React, { useEffect, Fragment, useRef } from 'react';
import Swiper from 'swiper';
import { Link } from 'react-router-dom';

const ImageCarousel = ({ movies }) => {
  const swiperRef = useRef(null);

  console.log(swiperRef.current);

  useEffect(() => {
    const slider = new Swiper(swiperRef.current, {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      breakpoints: {
        1145: {
          slidesPerView: 3
        },
        699: {
          slidesPerView: 2
        }
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  });

  return (
    <div className="swiper-container" ref={swiperRef}>
      <div className="swiper-wrapper">
        {movies.map(movie => (
          <div
            className="swiper-slide"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w300/${
                movie.poster_path
              })`
            }}
          />
        ))}
      </div>

      <div className="swiper-pagination" />

      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />
    </div>
  );
};

export default ImageCarousel;
