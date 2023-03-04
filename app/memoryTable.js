import React, { Component } from 'react';

import { Container, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import NumberAndCode from './numberAndCode';
import { CopyRight } from './copyRight';
import { getNumber, getCode } from '../utils/utils';
import { CONFIG } from '../config';

const STATE_MANAGER = {
  number: 'number',
  code: 'code',
};

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});

// const styles = makeStyles((theme) =>
//   createStyles({
//     container: {
//       display: 'flex',
//       flexDirection: 'column',
//     },
//   })
// );

class MemoryTable extends Component {
  constructor() {
    super();
    this.state = {
      number: this.getRandomNumber(),
      tableState: 'number',
    };
  }

  cachedNumbers = [];

  onNext = () => {
    switch (this.state.tableState) {
      case 'number':
        this.setState((prevState) => ({
          tableState: 'code',
        }));
        break;

      case 'code':
        this.setState((prevState) => ({
          number: this.getRandomNumber(),
          tableState: 'number',
        }));
    }
  };

  getRandomNumber = () => {
    let number;
    do {
      number = getNumber();
      console.log(number);
    } while (this.cachedNumbers.includes(number));

    console.log(this.cachedNumbers);
    this.cachedNumbers.push(number);
    if (this.cachedNumbers.length > CONFIG.DONT_REPEAT_COUNT) {
      this.cachedNumbers.shift();
    }
    return number;
  };

  getDisplayCode = () => {
    return this.state.tableState === STATE_MANAGER.code
      ? getCode(this.state.number)
      : String(this.state.number).split('');
  };

  getTitle = () => {
    return this.state.tableState === STATE_MANAGER.code ? 'code' : 'number';
  };

  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="sm" className={classes.container}>
        <Button variant="contained" color="primary" onClick={this.onNext}>
          Next
        </Button>
        <NumberAndCode title={this.getTitle()} code={this.getDisplayCode()} />
        <CopyRight />
      </Container>
    );
  }
}

MemoryTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemoryTable);
