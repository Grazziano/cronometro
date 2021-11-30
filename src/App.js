import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import StopWatch from './components/StopWatch';
import Timer from './components/Timer';


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={Timer} />
            <Route path="/stopwatch" component={StopWatch} />
            <Route path="/timer" component={Timer} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
