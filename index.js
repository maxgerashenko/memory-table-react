import React, { Component } from 'react';
import { render } from 'react-dom';
import Wellcome from './wellcome';
import './style.css';
import {getNumber, getCode} from './utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: 'Memory Table',
      displayNumber: '',
      displayCode: '',
    };

    this.onShowClick.bind(this);
    this.onShowCode.bind(this);
    this.getRandomNumber.bind(this);
    this.getCode.bind(this);
  }

  onShowClick() {
     this.setState(prevState => ({
      displayNumber: this.getRandomNumber()
    }));
  }

  onShowCode() {
    this.setState(prevState => ({
      displayCode: this.getCode()
    }));
  }

  getRandomNumber() {
    return getNumber();
  }

  getCode() {
    return getCode(this.state.displayNumber);
  }

  render() {
    return (
      <div>
        <Wellcome name={this.state.appName} />
        <div>
          <button onClick={() =>this.onShowClick()}>Show number</button>
          <button onClick={ () => this.onShowCode()}>Show result</button>
        </div>
        <div>
          <h2>Number</h2>
          <label>{this.state.displayNumber}</label> 
        </div>
        <div>
          <h2>Code</h2>
          <label>{this.state.displayCode}</label> 
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
