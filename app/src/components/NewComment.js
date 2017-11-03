import React, { Component } from 'react'

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
    width: 'inherit',
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
  render() {
    const { classes } = this.props

    return (
      <form>
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
            Post
          </Button>
        </Paper>
      </form>
    )
  }
}

export default withStyles(styles)(NewComment)
