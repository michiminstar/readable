import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPosts } from '../actions/postActions'

import Grid from 'material-ui/Grid'
import CategoryButtons from './CategoryButtons'
import SortPosts from './SortPosts'
import SinglePost from './SinglePost'

class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array
  }

  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const { posts } = this.props

    return (
      <div className='container'>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <CategoryButtons />
          </Grid>
          <Grid item xs={6}>
            <SortPosts />
          </Grid>

          {posts.map(post => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <SinglePost post={post} />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

function mapStateToProps({ posts }, { match }) {
  const category = match.params.category
  return {
    posts: category ? posts.filter(post => post.category === category) : posts
  }
}

export default connect(mapStateToProps, {
  getPosts
})(Posts)
