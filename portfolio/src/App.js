import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Router } from 'react-router-dom';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route exact path="/" component={Projects}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/about" component={About}></Route>

        <div className="navigation">
          <img src={logo} className="logo" alt="Logo Image" />
          <div className="navigation-sub">
            <Link to="/" className="item">Projects</Link>
            <Link to="/contact" className="item">Contact</Link>
            <Link to="/about" className="item">About</Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
