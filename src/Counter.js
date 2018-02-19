import React, { Component } from 'react';
import './Counter.css';
import { connect } from 'react-redux';
import CounterChildOne from './CounterChildOne';

class Counter extends Component {
  
  increment = () => {
    console.log('Increment', this.props);
    // this.props.dispatch({type: 'INCREMENT'});
    this.props.count_increment();
  };

  decrement = () => {
    console.log('Decrement');
    // this.props.dispatch({type: 'DECREMENT'});
    this.props.count_decrement();
  };

  add = () => {
    console.log('Add');
    // this.props.dispatch({type: 'ADD'});
    this.props.moog_increment();
  };

  subtract = () => {
    console.log('Subtract');
    // this.props.dispatch({type: 'SUBTRACT'});
    this.props.moog_decrement();
  };

  render() {
    return (
      <div className='Counter'>
        <h1>Counter</h1>
        <div id='num'>{this.props.count}</div>
        <div>{this.props.moog}</div>
        <br />
        <button onClick={this.increment}>INCREMENT</button>
        <button onClick={this.decrement}>DECREMENT</button>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.subtract}>SUBTRACT</button>
        <CounterChildOne count={this.props.count}  />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    moog: state.mooger.moog
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    count_increment: () => {
      dispatch({
        type: 'INCREMENT'
      });
    },
    count_decrement: () => {
      dispatch({
        type: 'DECREMENT'
      });
    },
    moog_increment: () => {
      dispatch({
        type: 'ADD'
      });
    },
    moog_decrement: () => {
      dispatch({
        type: 'SUBTRACT'
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
