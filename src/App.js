import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './Main';
import User from './User';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
    this.state = {
      contactData: []
    };
  }

  formSubmitHandler(e, history) {
    e.preventDefault();
    let userData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      status: e.target.status.value
    }
    this.setState({
      contactData: [...this.state.contactData, userData]
    });
    history.push('/');
  }

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
            <Route
              exact
              path="/"
              render={props => (
                <Main {...props} data={this.state.contactData} />
              )}
            />
            <Route
              exact
              path="/user"
              render={props => (
                <User {...props} submitHandler={this.formSubmitHandler} />
              )}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;