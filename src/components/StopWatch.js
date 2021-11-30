import React, { Component } from 'react';
import Title from './Title';
import img from '../assets/image/big_timer.png';

export default class StopWatch extends Component {
    constructor(props) {
    super();
    
    this.state = {
      startNumber: 0,
      btnStart: 'START',
    }

    this.timer = null;
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  start() {
    const state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.btnStart = 'START';
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.startNumber += 0.1;
        this.setState(state);
      }, 100);
      state.btnStart = 'PAUSE';
    }

    this.setState(state);
  }

  reset() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state;
    state.startNumber = 0;
    state.btnStart = 'START';
    this.setState(state);
  }

  startTimer(duration) {
    let timer = duration, minutes, seconds;

    setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? '0' : minutes;
      seconds = seconds < 10 ? '0' : seconds;
      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  render() {
    const { btnStart } = this.state;
    return (
      <div className="container">
        <Title title="Cronômetro" />
        <img className="image" src={ img } alt="Cronômetro" />
        <p className="stopwatch">{ this.state.startNumber.toFixed(1) }</p>
        <div className="btnDiv">
          <button className="btn" onClick={ this.start }>{ btnStart }</button>
          <button className="btn" onClick={ this.reset }>RESET</button>
        </div>
      </div>
    )
  }
}
