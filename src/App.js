import React, { Component } from 'react';
import logo from './logo.svg';
import ContactTable from "./ContactTable";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            <Link to="/">Welcome to Contactbook App</Link>
          </h1>
        </header>
        <main role="main" className="container">
          <h2 className="text-center">Your Contacts</h2>
          <ContactTable />
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Add New Contact
          </button>
        </main>
        <Route exact path="/" component={Home} />
      </div>
    </Router>;
  }
}

export default App;