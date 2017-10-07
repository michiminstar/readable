import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
      </div>
    )
  }
}

export default App
