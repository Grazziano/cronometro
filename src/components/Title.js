import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
  constructor(props) {
    super();

    this.state = {
      title: props.title,
    }
  }
  render() {
    return (
      <div>
        <h1 className="title">{ this.state.title }</h1>
      </div>
    )
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}
