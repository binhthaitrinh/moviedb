import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import { Navbar } from './components/Layout';
import './App.css';
import './swiper.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />

        <Route exact path="/" component={Landing} />
      </Fragment>
    </Router>
  );
}

export default App;
