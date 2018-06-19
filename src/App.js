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
    this.formUpdateHandler = this.formUpdateHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.state = {
      contactData: []
    };
  }

  formSubmitHandler(e, history) {
    e.preventDefault();
    let userData = {
      id: this.state.contactData.length + 1,
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

  formUpdateHandler(e, id, history) {
    e.preventDefault();
    let copyState = this.state.contactData;
    let index = copyState.findIndex(function(elem){
      return elem.id === this;
    }, id);

    copyState[index] = {
      id: id,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      status: e.target.status.value
    }

    this.setState({
      contactData: [...copyState]
    });
    history.push('/');
  }

  deleteHandler(id, e) {
    e.preventDefault();
    if (window.confirm("Do you really want to delete?")) { 
      let copyData = this.state.contactData;
      let index = copyData.findIndex(function(elem){
        return elem.id === this;
      }, id);
      copyData.splice(index, 1);
      this.setState({
        contactData: [...copyData]
      });
    } 
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
                <Main {...props} data={this.state.contactData} deleteHandler={this.deleteHandler}/>
              )}
            />
            <Route
              exact
              path="/user"
              render={props => (
                <User {...props} submitHandler={this.formSubmitHandler} />
              )}
            />
            <Route
              exact
              path="/user/:id"
              render={props => (
                <User {...props} updateHandler={this.formUpdateHandler} userData={this.state.contactData} />
              )}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;