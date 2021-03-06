import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart/Cart";
import { Switch, Route} from "react-router-dom";
import Modal from "./components/modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* I want nav bar to displayed no matter what so i am not going to put this under switch */}
        <Navbar />
      <Switch >
        <Route exact path = "/" component = {ProductList} />
        <Route  path = "/details" component = {Details} />
        <Route  path = "/cart" component = {Cart} />
        <Route component = {Default} />
      </Switch>
      <Modal />
      </React.Fragment>
    );
  }
}

export default App;
