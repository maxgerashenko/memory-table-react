import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { CONFIG } from '../config'

const TIMER_S = CONFIG.RESULT_TIME_DELAY*60;

export class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = { time: {h: 0, m: 0, s: 0}, seconds: TIMER_S };
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  startTimer = () => {
    if (this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });

    this.startTimer();
  }

  countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds == 0) { 
      clearInterval(this.timer);
    }
  }

  resetTimer = () => {
    clearInterval(this.timer);
    this.setState({
      seconds: TIMER_S,
      time: this.secondsToTime(TIMER_S),
    });
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return this.props.children({
      minutes: this.state.time.m,
      seconds: this.state.time.s,
      onReset: this.resetTimer,
    });
  }
}
