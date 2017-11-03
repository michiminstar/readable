import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createPost } from '../actions'
import PropTypes from 'prop-types'
import { generateID } from '../utils/helper'

import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'
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
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 240,
    marginLeft: 0,
  },
  button: {
    margin: theme.spacing.unit,
    color: 'white',
  }
})

class NewPost extends Component {
  state = {
    category: '',
  }

  addPost = (e) => {
    e.preventDefault()

    const newPost = {
      id: generateID(),
      timestamp: Date.now(),
      title: e.target.title.value,
      body: e.target.content.value,
      author: e.target.author.value,
      category: e.target.category.value,
    }

    this.props.createPost(newPost, () => this.props.history.push('/'))
  }

  handleChange = category => event => {
    this.setState({ [category]: event.target.value })
  }

  render() {
    const { classes, categories } = this.props

    return (
      <form className='container' onSubmit={this.addPost}>
        <Typography
          type="headline"
          component="h1"
          className={classes.headline}>
          New Post
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
            label='Title'
            name='title'
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            margin="normal"
          />
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="category">Choose category...</InputLabel>
            <Select
              value={this.state.category}
              onChange={this.handleChange('category')}
              input={<Input id="category" />}
            >
              {categories && categories.map((category) => (
                <MenuItem
                  key={category.name}
                  value={category.name}>{category.name}</MenuItem>
              )
              )}
            </Select>
          </FormControl>
          <TextField
            label='Content'
            name='content'
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
            Post
          </Button>
        </Paper>
      </form>
    )
  }
}

NewPost.propTypes = {
  classes: PropTypes.object.isRequired,
}

function mapStateToProps({ posts, categories }) {
  return {
    posts,
    categories
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, {
    createPost
  })
)(NewPost)
