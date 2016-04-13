const agenda = [
  'Webpack & Modern JavaScript Overview',
  'React Overview',
  'Our first component',
  'JSX',
  'State',
  'Nested Components',
  'Props',
]

const reactBuzzWords = [
  'functional programming',
  'immutable state',
  'one-way data flow',
  'top-down data propagation',
]

// let

function () {
  if (true) {
    var thing = 'woo'
  }
  console.log(thing) // 'woo'
}

function () {
  if (true) {
    let thing = 'woo'
  }
  console.log(thing) // 'undefined'
}

// const

function () {
  var thing = 'woo'
  thing = 'anotherThing'
}

function () {
  const thing = 'woo'
  thing = 'anotherThing' // Throws error
}


// Arrow Functions

const myFunc = thing => console.log(thing)

const add = (a, b) => a + b

const somethingMore = (a, b) => {
  const added = a + b
  return added / 3
}

[1,2,3].map(item => item * 3)


// template strings

// '' "" ``

const name = 'Jacob'

`
this
doesn't
break
My name is ${name}
`

// modules

var React = require('react')
import React from 'react'

module.exports = {}
export default {}


// destructuring

var thing = {a: 1, b: 2, c: 3}
var a = thing.a
var b = thing.b

var {a, b} = thing




