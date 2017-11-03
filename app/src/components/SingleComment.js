import React, { Component } from 'react'

import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import NewComment from './NewComment'

const styles = theme => ({
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 720,
    margin: '40px auto',
  },
})

class SingleComment extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className='container'>
        <Grid container spacing={24} className={classes.cardContainer}>
          <Typography type="headline" component="h3">
            Comments
          </Typography>

          <NewComment />
        </Grid>
      </div>
    )
  }

}

export default withStyles(styles)(SingleComment)
