import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import routeList from './router/routeList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <ScrollToTop />
            <Switch>{routeList}</Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;