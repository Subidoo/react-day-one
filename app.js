import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './components/counter'
import TotalCount from './components/total-count'


class Greeting extends React.Component {
  render() {
    return <h3>Hello, {this.props.name}!</h3>
  }
}


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counters: [0,0,0,0,0]
    }
  }
  incrementCounter(counterIndex) {
    this.state.counters[counterIndex]++
    this.setState({counters: this.state.counters})
  }
  render() {
    const counters = this.state.counters.map((count, index) => {
      return (
        <Counter 
          key={index}
          handleIncrement={this.incrementCounter.bind(this, index)} 
          count={count} />
      )
    })



    const nameArr = ['Jacob', 'Jordan', 'John', 'Jim']
    const allGreetings = nameArr.map((item) => <Greeting name={item} />) 

    /*
    Greeting
    <Greeting name={name} />

    foo
    foo({name: name})
    */


    /*
    let allGreetings = []

    for (let i = 0; i < nameArr.length; i++) {
      const name = nameArr[i]
      console.log("About to render Greeting with name: ", name)
      allGreetings.push(<Greeting name={name} />)
    }
    */

    let totalCount = 0
    this.state.counters.forEach((count) => totalCount += count)

    console.log(totalCount)

    return (
      <div class='container'>
        <h1>Hello, world!</h1>
        {allGreetings}
        {counters}
        <TotalCount totalCount={totalCount} />
      </div>
    )
  }
}






ReactDOM.render(<App />, document.getElementById('app'))
