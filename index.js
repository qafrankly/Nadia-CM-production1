import React, { Component, PropTypes } from 'react';

class RandomTest extends Component {
  static PropTypes = {
    h1: PropTypes.string,
    h2: PropTypes.string,
  }
  render(){
    let {
      //h1 = dep(),
      h2 = 'sup this a github edit',
    } = this.props;

    let {
      flux, config
    } = this.context;

    return (
      <div>
        <h2>test test test</h2>
      </div>
    );
  }
}

export default RandomTest;
