import React, { Component } from 'react'
import Title from './Title'

export default class Timer extends Component {
  constructor() {
    super();

    this.state = {
      timeDate: '',
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      btnStart: 'START',
    }

    this.timer = null;

    this.startTimer = this.startTimer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  startTimer() {
    if (this.timer === null) {
      // const { timeDate, days, hours, minutes, seconds } = this.state;
      const { timeDate } = this.state;
      // const year = new Date().getFullYear();
      // const month = new Date().getMonth();
      // const timer = new Date('Dec 25 2021 00:00:00');
      const timer = new Date(timeDate);
      // const timer = new Date(`${month} ${days} ${year} ${hours}:${minutes}:${seconds}`);
      // const timer = new Date(year, month, days , hours, minutes, seconds);
      console.log(timeDate);

      this.timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = timer - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
          //stop timer
          clearInterval(this.timer);
        } else {
          this.setState(
            {
              days,
              hours,
              minutes,
              seconds,
            },
          )
        }
      }, 1000);
      this.setState({ btnStart: 'PAUSE' });
    } else {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ btnStart: 'START' });
    }
  }

  // componentDidMount() {
  //   this.startTimer();
  //   return () => {
  //     clearInterval(this.timer)
  //   };
  // }

  // componentDidUpdate(prevState, prevProps) {
  //   this.startTimer();
  //   return () => {
  //     clearInterval(this.timer)
  //   };
  // }

  handleChange({ target }) {
    const { name , value } = target;
    this.setState(
      {
        [name]: value,
      },
    )
  }

  reset() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState(
      {
        timeDate: '',
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      },
    );
  }

  render() {

    const { days, hours, minutes, seconds, btnStart } = this.state;

    return (
      <section className="timer-container">
        <Title title="Timer" />

        <section className="input-section">
          <div>
            <input type="datetime-local" name="timeDate" onChange={ this.handleChange } />
            {/* <input type="number" name="days" placeholder="Days" onChange={ this.handleChange } />
            <input type="number" name="hours" placeholder="Hours" onChange={ this.handleChange } />
            <input type="number" name="minutes" placeholder="Minutes" onChange={ this.handleChange } />
            <input type="number" name="seconds" placeholder="Seconds" onChange={ this.handleChange } /> */}
          </div>
          
          <div>
            {/* <input type="button" value="Start" onClick={ this.startTimer } />
            <input type="button" value="Pause" onClick={ this.startTimer } /> */}
            <input type="button" value={ btnStart } onClick={ this.startTimer } />
            <input type="button" value="RESET" onClick={ this.reset } />
          </div>
        </section>

        <section className="timer">
          <div>
            <span className="mdi mdi-calendar-clock timer-icon"></span>
            {/* <Title title="Timer" /> */}
          </div>
          <div>
            <section>
              <p>{ days }</p>
              <p><small>Days</small></p>
            </section>
            <span>:</span>

            <section>
              <p>{ hours }</p>
              <p><small>Hours</small></p>
            </section>
            <span>:</span>

            <section>
              <p>{ minutes }</p>
              <p><small>Minutes</small></p>
            </section>
            <span>:</span>

            <section>
              <p>{ seconds }</p>
              <p><small>Seconds</small></p>
            </section>

          </div>
        </section>
      </section>
    )
  }
}
