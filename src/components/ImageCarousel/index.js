import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Link } from 'react-router-dom';
import TvGenre from '../../constants/TvGenre';

const ImageCarousel = ({ movies, type = 'movie' }) => {
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

  const helper = id => {
    let result = '';
    TvGenre.genres.forEach(genre => {
      if (genre.id === id) {
        result = genre.name;
      }
    });
    return result;
  };

  return (
    <div className="swiper-container" ref={swiperRef}>
      <div className="swiper-wrapper">
        {movies.map(movie => (
          <Link
            to={`/${type}/details/${movie.id}`}
            key={movie.id}
            className="swiper-slide"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w300/${
                movie.poster_path
              })`
            }}>
            <div className="movie-info">
              <h1 className="movie-info-title">
                {type === 'tv' ? movie.name : movie.title}
              </h1>
              <p className="movie-info-genre">
                {movie.genre_ids.map(id => helper(id)).join(', ')}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="swiper-pagination" />

      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />
    </div>
  );
};

export default ImageCarousel;
