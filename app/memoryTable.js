import React, { Component } from "react";

import { Container, Button } from "@material-ui/core";

import NumberAndCode from "./numberAndCode";
import { CopyRight } from "./copyRight";
import { getNumber, getCode } from "../utils/utils";
import { CONFIG } from '../config';

const STATE_MANAGER = {
  number: "code",
  code: "number",
  init: "number"
};

export class MemoryTable extends Component {
  constructor() {
    super();
    this.state = {
      displayNumber: "",
      displayCode: "",
      tableState: "init"
    };
  }

  cachedNumbers = [];

  onNext = () => {
    switch (this.state.tableState) {
      case "number":
        this.setState(prevState => ({
          displayCode: this.getCode(),
          tableState: "code"
        }));
        break;

      case "code":
        this.setState(prevState => ({
          displayNumber: this.getRandomNumber(),
          displayCode: "",
          tableState: "number"
        }));

      case "init":
        this.setState(prevState => ({
          displayNumber: this.getRandomNumber(),
          displayCode: "",
          tableState: "number"
        }));
    }
  };

  getRandomNumber = () => {
    let number;
    do{
      number = getNumber();
      console.log(number);
    } while(this.cachedNumbers.includes(number));

    console.log(this.cachedNumbers);
    this.cachedNumbers.push(number);
    if(this.cachedNumbers.length > CONFIG.DONT_REPEAT_COUNT) {
      this.cachedNumbers.shift();
    }
    return number;
  };

  getCode = () => {
    return getCode(this.state.displayNumber);
  };

  render() {
    return (
      <Container maxWidth="sm">
        <Button variant="contained" color="primary" onClick={this.onNext}>
          Next
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
