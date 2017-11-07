import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getPosts, editPost } from '../actions/postActions'
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
    margin: theme.spacing.unit,
    color: 'white',
  }
})

class EditPost extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  editPost = (e) => {
    e.preventDefault()

    const postId = this.props.post.id
    const title = e.target.title.value
    const body = e.target.content.value

    this.props.editPost(
      postId,
      title,
      body,
      () => this.props.history.push('/')
    )
  }

  render() {
    const { classes, post } = this.props

    return (
      <form className='container' onSubmit={this.editPost}>
        <Typography
          type="headline"
          component="h1"
          className={classes.headline}>
          Edit Post
        </Typography>

        <Paper className={classes.formContainer} elevation={4}>
          <TextField
            label='Title'
            name='title'
            defaultValue={post.title}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            margin="normal"
          />
          <TextField
            label='Content'
            name='content'
            defaultValue={post.body}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            multiline
            rows="4"
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

function mapStateToProps({ posts }, { match }) {
  return {
    post: _.find(posts, { id: match.params.postId })
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, {
    getPosts,
    editPost,
  })
)(EditPost)
