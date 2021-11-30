import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-light bg-light">
          <Link className="btn" to="/stopwatch">Cronômetro</Link>
          <Link className="btn" to="/timer">Timer</Link>
        </nav>
      </div>
    )
  }
}
