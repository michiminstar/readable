import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'

const styles = theme => ({
  card: {
    minWidth: 275,
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
})

function SinglePost(props) {
  const classes = props.classes

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="body1" className={classes.subHeading}>
            Thursday, July 14th 2016
          </Typography>
          <Typography type="headline" component="h2">
            <Link to={'/'}>Title</Link>
          </Typography>
          <Typography type="body2" className={classes.author}>
            by author
          </Typography>
          <Typography component="p" className={classes.bodyContent}>
            This is the post content.
          </Typography>
          <Typography type="body1">
            0 comment
          </Typography>
        </CardContent>

        <CardActions disableActionSpacing>
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

SinglePost.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SinglePost)
