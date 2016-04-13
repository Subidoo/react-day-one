import React, { Component } from 'react'

class Counter extends Component {
  render() {
    return (
      <div>
        <h3>Count: {this.props.count}</h3>
        <button onClick={this.props.handleIncrement}>Plus plus!</button>
      </div>
    )
  }
}

export default Counter
