import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from './NewComponent';
import BankAccount from './BankAccount';

class App extends Component {
  render() {
      var account = "";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <NewComponent/>
          <BankAccount accountName = {"Maddi"} accountBalance = {"$500"}/>
      </div>
    );
  }
}

export default App;
