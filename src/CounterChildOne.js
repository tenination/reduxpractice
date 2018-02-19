import React, { Component } from 'react';
import CounterChildTwo from './CounterChildTwo';

class CounterChildOne extends Component {
  
  clickMe = () => {
    console.log('Child props are', this.props);
  };

  render() {
    return (
      <div >
        <button onClick={this.clickMe}></button>
        <h1>{this.props.count}</h1>
        <CounterChildTwo />
      </div>
    );
  }
}

export default CounterChildOne;
