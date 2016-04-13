import React, { Component } from 'react'

class TotalCount extends Component {
  render() {
    return (
      <div>
        <h3>Total Count: {this.props.totalCount}</h3>
      </div>
    )
  }
}

export default TotalCount
