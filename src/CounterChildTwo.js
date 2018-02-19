import React, { Component } from 'react';
import CounterChildThree from './CounterChildThree';

class CounterChildTwo extends Component {
  
  clickMe = () => {
    console.log('Child props are', this.props);
  };

  render() {
    return (
      <div >
        <button onClick={this.clickMe}></button>
        <h1>I am Child Two</h1>
        <CounterChildThree />
      </div>
    );
  }
}

export default CounterChildTwo;
