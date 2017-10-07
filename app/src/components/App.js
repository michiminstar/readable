import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Header from './layout/Header'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>

      </div>
    )
  }
}

export default App
