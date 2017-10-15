import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategories } from '../actions'
import Header from './layout/Header'
import Home from './Home'

class App extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

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

export default withRouter(connect(null, {
  getCategories
})(App))
