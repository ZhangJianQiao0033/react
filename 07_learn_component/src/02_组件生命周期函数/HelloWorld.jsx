import React, { Component } from 'react'

export class HelloWorld extends Component {
  render() {
    return (
      <div>HelloWorld</div>
    )
  }
  
  componentDidMount() {
    console.log("HelloWorld componentDidMount")
  }

  componentWillUnmount() {
    console.log("HelloWorld componentWillUnmount")
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("HelloWorld componentDidUpdate")
  }
}

export default HelloWorld