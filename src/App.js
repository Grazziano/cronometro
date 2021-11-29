import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import StopWatch from './components/StopWatch';
import Timer from './components/Timer';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" />
            <Route path="/stopwatch" component={StopWatch} />
            <Route path="/timer" component={Timer} />
          </Switch>
        </BrowserRouter>
        <StopWatch />
      </div>
    )
  }
}
