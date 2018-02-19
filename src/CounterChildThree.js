import React, { Component } from 'react';
import { connect } from 'react-redux';

class CounterChildThree extends Component {
  
  clickMe = () => {
    console.log('Child props are', this.props);
  };

  render() {
    return (
      <div >
        <button onClick={this.clickMe}></button>
        <h1>I am Child Three</h1>
        {this.props.count}
        {this.props.moog}
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

export default connect(mapStateToProps)(CounterChildThree);
