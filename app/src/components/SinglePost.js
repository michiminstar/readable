import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { formatTimestamp } from '../utils/helper'

import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'

const styles = theme => ({
  card: {
    minWidth: 275,
    minHeight: 320,
  },
  subHeading: {
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
  iconPosition: {
    position: 'absolute',
    bottom: 25,
  },
})

class SinglePost extends Component {
  render() {
    const { classes, post } = this.props

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
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

          <CardActions disableActionSpacing className={classes.iconPosition}>
            <IconButton aria-label="Upvote">
              <Icon>sentiment_very_satisfied</Icon>
            </IconButton>
            <IconButton aria-label="Downvote">
              <Icon>sentiment_dissatisfied</Icon>
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

export default compose(
  withStyles(styles),
  connect(null)
)(SinglePost)
