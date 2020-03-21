import React, { Component } from 'react';
import { render } from 'react-dom';
import Wellcome from './wellcome';
import './style.css';
import {getNumber, getCode} from './utils';
import theme from './theme';
import CopyRight from './copyRight';

import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: 'Memory Table',
      displayNumber: '',
      displayCode: '',
    };

  }

  onShowNumber = () => {
     this.setState(prevState => ({
      displayNumber: this.getRandomNumber(),
      displayCode: '',
    }));
  }

  onShowCode = () => {
    this.setState(prevState => ({
      displayCode: this.getCode()
    }));
  }

  getRandomNumber = () => {
    return getNumber();
  }

  getCode = () => {
    return getCode(this.state.displayNumber);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Wellcome name={this.state.appName} />
          <div>
            <Button variant="contained" color="primary"
              onClick={this.onShowNumber}>
              Show number
            </Button>
            <Button variant="contained" color="primary"
              onClick={this.onShowCode}>
              Show Code
            </Button>
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
        <CopyRight/>
      </ThemeProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
