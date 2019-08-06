import React, { useEffect, Fragment, useRef } from 'react';
import Swiper from 'swiper';
import { Link } from 'react-router-dom';
import SpinnerSm from '../Layout/SpinnerSm';

const ActorCarousel = ({ movieCredit }) => {
  const swiperRef = useRef(null);

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

  return movieCredit.loading ? (
    <SpinnerSm />
  ) : (
    <div className="movie-detail-content">
      <h1 className="movie-detail-header">Cast</h1>
      <div className="swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper">
          {movieCredit.cast.map(actor => (
            <Link
              to={`/`}
              key={actor.id}
              className="swiper-slide"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w185${
                  actor.profile_path
                })`
              }}>
              <div className="movie-info">
                <h1 className="movie-info-title">{actor.name}</h1>
                <p className="movie-info-genre">{actor.character}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="swiper-pagination" />

        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </div>
    </div>
  );
};

export default ActorCarousel;
