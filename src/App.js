import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Footer from './components/Layout/Footer';
import { Navbar } from './components/Layout';
import MovieDetail from './components/MovieDetail';
import './App.css';
import './swiper.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />

        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/movie/details/:id" component={MovieDetail} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
