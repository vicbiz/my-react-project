import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';
import Contact from './components/pages/contact';

import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path="/" component={Homepage} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/contact" component={Contact} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
