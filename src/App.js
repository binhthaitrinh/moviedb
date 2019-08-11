import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Footer from './components/Layout/Footer';
import { Navbar } from './components/Layout';
import MovieDetail from './components/MovieDetail';
import TvDetail from './components/TV/TvDetail';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ScrollToTop from './components/Layout/ScrollToTop';
import SearchMovie from './components/Movie/SearchMovie';
import LikedMovieList from './components/Movie/LikedMovieList';
import store from './store';

import './App.css';
import './swiper.css';

import setAuthToken from './components/utils/setAuthToken';
import { loadUser } from './actions/auth';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

// axios.defaults.baseURL =
//   'https://us-central1-social-ape-c1875.cloudfunctions.net/api';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Router>
      <ScrollToTop>
        <Fragment>
          <Navbar />

          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/movie/details/:id" component={MovieDetail} />
            <Route exact path="/tv/details/:id" component={TvDetail} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/search-result/:query" component={SearchMovie} />
            <Route exact path="/my-list" component={LikedMovieList} />
          </Switch>
          <Footer />
        </Fragment>
      </ScrollToTop>
    </Router>
  );
}

export default App;
