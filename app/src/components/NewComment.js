import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { addPostComment } from '../actions'
import { generateID } from '../utils/helper'

import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

const styles = theme => ({
  formContainer: theme.mixins.gutters({
    width: 500,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    margin: 'auto',
  }),
  headline: {
    marginTop: 50,
    textAlign: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    color: 'white',
    marginTop: 15,
    marginBottom: 10,
  }
})

class NewComment extends Component {

  submitComment = (e) => {
    e.preventDefault()

    const postId = this.props.match.params.postId

    const newComment = {
      id: generateID(),
      timestamp: Date.now(),
      parentId: postId,
      author: e.target.author.value,
      body: e.target.comment.value,
    }

    this.props.addPostComment(
      newComment,
      postId,
      () => this.props.history.push(`/post/${postId}`)
    )
  }

  render() {
    const { classes } = this.props

    return (
      <form className='container' onSubmit={this.submitComment}>
        <Typography
          type="headline"
          component="h1"
          className={classes.headline}>
          New Comment
        </Typography>

        <Paper className={classes.formContainer} elevation={4}>
          <TextField
            label='Name'
            name='author'
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            margin="normal"
          />
          <TextField
            label='Comment'
            name='comment'
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            multiline
            rows="2"
            margin="normal"
          />
          <Button
            raised color="accent"
            className={classes.button}
            type='submit'
            >
            Submit
          </Button>
        </Paper>
      </form>
    )
  }
}

export default compose(
  withStyles(styles),
  connect(null, {
    addPostComment
  })
)(NewComment)
