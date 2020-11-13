import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ProductList />
        <Details />
        <Cart />
        <Default />
      <div className="container"> 
        <div className="row">
          <div className="col-6">coloumn one</div>
          <div className="col-6">coloumn two</div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;