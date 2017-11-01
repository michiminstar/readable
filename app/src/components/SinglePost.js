import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getPosts, deletePost } from '../actions'
import { formatTimestamp } from '../utils/helper'

import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'

const styles = theme => ({
  card: {
    minWidth: 275,
    height: 340,
  },
  contentHeight: {
    height: 220,
  },
  subHeading: {
    marginTop: 10,
    marginBottom: 16,
    fontSize: 13,
    color: theme.palette.text.secondary,
  },
  author: {
    color: theme.palette.text.secondary,
  },
  bodyContent: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 15,
  },
  iconPositionLeft: {
    marginTop: 30,
    display: 'inline-block',
  },
  iconPositionRight: {
    marginTop: 30,
    float: 'right',
  },
})

class SinglePost extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  onDelete = () => {
    this.props.deletePost(this.props.post.id)
  }

  render() {
    const { classes, post } = this.props

    return (
      <div>
        <Card className={classes.card}>
          <CardContent className={classes.contentHeight}>
            <Typography type="body1" className={classes.subHeading}>
              {formatTimestamp(post.timestamp)}
            </Typography>
            <Typography type="headline" component="h2">
              <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
            </Typography>
            <Typography type="body2" className={classes.author}>
              {post.author}
            </Typography>
            <Typography component="p" className={classes.bodyContent}>
              {post.body}
            </Typography>
            <Typography type="body1">
              0 comment
            </Typography>
          </CardContent>

          <CardActions disableActionSpacing className={classes.iconPositionLeft}>
            <IconButton aria-label="Upvote">
              <Icon>sentiment_very_satisfied</Icon>
            </IconButton>
            <IconButton aria-label="Downvote">
              <Icon>sentiment_dissatisfied</Icon>
            </IconButton>
          </CardActions>

          <CardActions disableActionSpacing className={classes.iconPositionRight}>
            <Link to={`/${post.category}/${post.id}/edit`}>
              <IconButton aria-label="Edit">
                <Icon>mode_edit</Icon>
              </IconButton>
            </Link>
            <IconButton aria-label="Delete" onClick={(e) => this.onDelete(e)}>
              <Icon>delete</Icon>
            </IconButton>
          </CardActions>
        </Card>
      </div>
    )
  }
}

SinglePost.propTypes = {
  classes: PropTypes.object.isRequired,
}

function mapDispatchToProps (dispatch) {
  return {
    deletePost: (postId) => dispatch(deletePost(postId))
  }
}

export default compose(
  withStyles(styles),
  connect(mapDispatchToProps, {
    getPosts,
    deletePost,
  })
)(SinglePost)
