import React, { Component } from "react";

import { Container, Button } from "@material-ui/core";

import NumberAndCode from './numberAndCode';
import {CopyRight} from './copyRight';
import {getNumber, getCode} from '../utils/utils';

export class MemoryTable extends Component {
  constructor() {
    super();
    this.state = {
      displayNumber: "",
      displayCode: ""
    };
  }

  onShowNumber = () => {
    this.setState(prevState => ({
      displayNumber: this.getRandomNumber(),
      displayCode: ""
    }));
  };

  onShowCode = () => {
    this.setState(prevState => ({
      displayCode: this.getCode()
    }));
  };

  getRandomNumber = () => {
    return getNumber();
  };

  getCode = () => {
    return getCode(this.state.displayNumber);
  };

  render() {
    return (
       <Container maxWidth="sm">
            <Button
              variant="contained"
              color="primary"
              onClick={this.onShowNumber}
            >
              Show number
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.onShowCode}
            >
              Show Code
            </Button>
        <NumberAndCode
          number={this.state.displayNumber}
          code={this.state.displayCode}
        />
        <CopyRight />

        </Container>
    );
  }
}
