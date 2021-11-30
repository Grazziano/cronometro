import React, { Component } from 'react'
import Title from './Title'

export default class Timer extends Component {
  constructor() {
    super();

    this.state = {
      timerDays: '00',
      timerHours: '00',
      timerMinutes: '00',
      timerSeconds: '00',
    }

    this.timer = null;

    this.startTimer = this.startTimer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  startTimer() {
    const timer = new Date('Dec 25 2021 00:00:00');

    setInterval(() => {
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
  }

  componentDidMount() {
    this.startTimer();
    return () => {
      clearInterval(this.timer)
    };
  }

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

  render() {

    const { days, hours, minutes, seconds } = this.state;

    return (
      <section className="timer-container">
        <Title title="Timer" />

        <section className="input-section">
          <div>
            <input type="number" name="days" placeholder="Days" onChange={ this.handleChange } />
            <input type="number" name="hours" placeholder="Hours" onChange={ this.handleChange } />
            <input type="number" name="minutes" placeholder="Minutes" onChange={ this.handleChange } />
            <input type="number" name="seconds" placeholder="Seconds" onChange={ this.handleChange } />
          </div>
          
          <div>
            <input type="button" value="Start" />
            <input type="button" value="Pause" />
            <input type="button" value="Reset" />
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
