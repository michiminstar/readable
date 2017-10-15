import React, { Component } from 'react'
import { connect } from 'react-redux'

import CategoryButtons from './CategoryButtons'


class Home extends Component {
  render() {
    return (
      <div>
        <CategoryButtons />
      </div>
    )
  }
}

export default Home
