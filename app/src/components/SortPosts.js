import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    float: 'right',
    marginTop: 15,
    fontSize: 13,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
})

class SortPosts extends Component {
  state = {
    sortPost: '',
  }

  handleChange = sortPost => event => {
    this.setState({ [sortPost]: event.target.value })
  }

  render() {
    const { classes } = this.props

    return (
      <form className={classes.container} autoComplete='off'>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="sortPost">Sort by...</InputLabel>
          <Select
            value={this.state.sortPost}
            onChange={this.handleChange('sortPost')}
            input={<Input id="sortPost" />}
          >
            <MenuItem value="time">Time</MenuItem>
            <MenuItem value="score">Vote score</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

SortPosts.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SortPosts)
