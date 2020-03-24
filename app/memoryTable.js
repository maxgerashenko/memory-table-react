import React, { Component } from "react";

import { Container, Button } from "@material-ui/core";

import NumberAndCode from "./numberAndCode";
import { CopyRight } from "./copyRight";
import { getNumber, getCode } from "../utils/utils";

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
    return getNumber();
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
