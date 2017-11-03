import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { formatTimestamp } from '../utils/helper'
import { getPostComments, upVoteComment, downVoteComment } from '../actions'

import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'

const styles = theme => ({
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 40,
  },
  subHeading: {
    marginTop: 10,
    marginBottom: 16,
    fontSize: 13,
    color: theme.palette.text.secondary,
  },
  bodyContent: {
    fontSize: 16,
    marginBottom: 15,
  },
  alignLeft: {
    marginTop: 30,
    marginBottom: 10,
    display: 'inline-block',
  },
  alignRight: {
    marginTop: 30,
    float: 'right',
  },
})

class SingleComment extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.cardContainer}>
        {this.props.comments.map(comment => (
          <div>
            <div key={comment.id} className={classes.alignLeft}>
              <Typography component="p" className={classes.bodyContent}>
                {comment.body}
              </Typography>
              <Typography type="body1" className={classes.subHeading}>
                by {comment.author} at {formatTimestamp(comment.timestamp)}
              </Typography>
              <Typography type="body1">
                {comment.voteScore} votes
              </Typography>
              <IconButton
                aria-label="Upvote"
                style={{ marginLeft: -14 }}
                onClick={() => {
                  this.props.upVoteComment(comment.id, comment.parentId, "upVote")
                }}>
                <Icon>sentiment_very_satisfied</Icon>
              </IconButton>
              <IconButton
                aria-label="Downvote"
                onClick={() => {
                  this.props.downVoteComment(comment.id, comment.parentId, "downVote")
                }}>
                <Icon>sentiment_dissatisfied</Icon>
              </IconButton>
            </div>

            <div className={classes.alignRight}>
              <Link to={`/${comment.category}/${comment.id}/edit`}>
                <IconButton aria-label="Edit">
                  <Icon>mode_edit</Icon>
                </IconButton>
              </Link>
              <IconButton aria-label="Delete" onClick={(e) => this.onDelete(e)}>
                <Icon>delete</Icon>
              </IconButton>
            </div>
            <hr/>
          </div>
        ))}
      </div>
    )
  }
}

export default compose(
  withStyles(styles),
  connect(null, {
    getPostComments,
    upVoteComment,
    downVoteComment,
  })
)(SingleComment)
