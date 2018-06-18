import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './Main';
import User from './User';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
              <Link to="/">Welcome to Contactbook App</Link>
            </h1>
          </header>
          <main role="main" className="container">
            <Route exact path="/" component={Main} />
            <Route exact path="/user" component={User} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;