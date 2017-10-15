import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from 'material-ui/Grid'
import CategoryButtons from './CategoryButtons'
import SortPosts from './SortPosts'
import SinglePost from './SinglePost'

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <CategoryButtons />
          </Grid>
          <Grid item xs={6}>
            <SortPosts />
          </Grid>
          <Grid item xs={4}>
            <SinglePost />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Home
