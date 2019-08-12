import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import { Link } from 'react-router-dom';

const Slideshow = ({ movies }) => {
  const [index, set] = useState(0);

  const transitions = useTransition(movies[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  });

  useEffect(() => {
    const changeImage = setInterval(() => {
      set(state => (state + 1) % movies.length);
    }, 6000);
    return () => clearInterval(changeImage);
  }, [movies]);
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className="bg"
      style={{
        ...props,
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${
          item.backdrop_path
        }`
      }}>
      <div className="trending-hero-box">
        <h2 className="trending-text">Now Playing</h2>
        <h1 className="text-heading text-shadow">
          {item.title || item.name || 'Unknown'}
        </h1>
        <p className="trending-movie-desc">{`${item.overview
          .split(' ')
          .splice(0, 30)
          .join(' ')}...`}</p>
        <div className="trending-action">
          <Link to={`/movie/details/${item.id}`}>
            <button className="btn btn-primary">More info</button>
          </Link>
          <button className="btn btn-border">Add to List</button>
        </div>
      </div>
    </animated.div>
  ));
};

export default Slideshow;
