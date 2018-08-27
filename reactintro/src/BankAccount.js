import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class BankAccount extends Component {
    render() {
        return (
            <div className="BankAccount">
                <h2>{this.props.accountName} has a account balance of: {this.props.accountBalance}</h2>
            </div>
        );
    }
}

export default BankAccount;