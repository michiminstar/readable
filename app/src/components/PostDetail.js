import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import {
  getPosts,
  deletePost,
  upVotePost,
  downVotePost,
} from '../actions/postActions'
import { getPostComments } from '../actions/commentActions'

import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import SinglePost from './SinglePost'
import SingleComment from './SingleComment'
import Button from 'material-ui/Button'

const styles = theme => ({
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 720,
    margin: '40px auto',
  },
  button: {
    color: 'white',
    float: 'right',
  },
  alignLeft: {
    display: 'inline-block',
  },
})

class PostDetail extends Component {
  componentDidMount() {
    this.props.getPosts()
    this.props.getPostComments(this.props.match.params.postId)
  }

  render() {
    const { classes, post, comments, history } = this.props
    const { id, category } = post

    return (
      <div>
        {post && (
          <div className='container'>
            <Grid container spacing={24} className={classes.cardContainer}>
              <div key={id}>
                <Grid item xs={12}>
                  <SinglePost key={id} post={post} />
                </Grid>
              </div>
            </Grid>

            <Grid container spacing={24} className={classes.cardContainer}>
              <div>
                <Typography
                  type="headline"
                  component="h4"
                  className={classes.alignLeft}
                  >
                  Comments
                </Typography>
                <Link to={`/${category}/${id}/comment`}>
                  <Button
                    raised color="accent"
                    className={classes.button}
                    type='submit'
                    >
                    New Comment
                  </Button>
                </Link>
              </div>

              {comments &&
                <SingleComment
                  category={category}
                  comments={comments}
                  history={history}
                />}
            </Grid>

          </div>
        )}
      </div>
    )
  }

}

function mapStateToProps({ posts, comments }, { match }) {
  const post = _.find(posts, { id: match.params.postId })

  return {
    post,
    comments: comments[match.params.postId]
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, {
    getPosts,
    deletePost,
    upVotePost,
    downVotePost,
    getPostComments,
  })
)(PostDetail)
