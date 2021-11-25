import React, { Component } from 'react';
import Title from './components/Title';
import img from './assets/image/cronometro.png';

export default class App extends Component {
  constructor(props) {
    super();
    
    this.state = {
      startNumber: 0,
      btnStart: 'START',
    }

    this.timer = null;
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
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

  render() {
    const { btnStart } = this.state;
    return (
      <div className="container">
        <Title title="Cronômetro" />
        <img className="image" src={ img } alt="Cronômetro" />
        <p className="timer">{ this.state.startNumber.toFixed(1) }</p>
        <div className="btnDiv">
          <button className="btn" onClick={ this.start }>{ btnStart }</button>
          <button className="btn" onClick={ this.reset }>RESET</button>
        </div>
      </div>
    )
  }
}
