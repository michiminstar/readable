import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getPostComments, editComment } from '../actions'
import _ from 'lodash'

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

class EditComment extends Component {

  editComment = (e) => {
    e.preventDefault()

    const { comment } = this.props
    const commentId = comment.id
    const postId = comment.parentId
    const timestamp = Date.now()
    const body = e.target.comment.value

    this.props.editComment(
      commentId,
      postId,
      body,
      timestamp,
      () => this.props.history.push(`/post/${postId}`)
    )
  }

  render() {
    const { classes, comment } = this.props

    return (
      <form className='container' onSubmit={this.editComment}>
        <Typography
          type="headline"
          component="h1"
          className={classes.headline}>
          Edit Comment
        </Typography>

        <Paper className={classes.formContainer} elevation={4}>
          <TextField
            label='Comment'
            name='comment'
            defaultValue={comment.body}
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
            Save
          </Button>
        </Paper>
      </form>
    )
  }
}

function mapStateToProps({ posts, comments }, { match }) {
  return {
    comment: _.find(
      comments[match.params.postId],
      { id: match.params.commentId }
    )
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, {
    getPostComments,
    editComment,
  })
)(EditComment)
