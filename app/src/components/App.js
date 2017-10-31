import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategories } from '../actions'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { amber, lightBlue } from 'material-ui/colors'

import Header from './layout/Header'
import Home from './Home'
import NewPost from './NewPost'
import EditPost from './EditPost'

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: lightBlue,
  },
})

class App extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts/new" component={NewPost} />
            <Route exact path="/:category" component={Home} />
            <Route path="/:category/:postId/edit" component={EditPost} />
          </Switch>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withRouter(connect(null, {
  getCategories
})(App))
