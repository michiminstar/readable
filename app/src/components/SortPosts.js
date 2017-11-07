import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { sortPost } from '../actions/postActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

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

  sortPost = (e) => {
    this.props.sortPost(e.target.value)
  }

  render() {
    const { classes } = this.props

    return (
      <form className={classes.container} autoComplete='off'>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="sortPost">Sort by...</InputLabel>
          <Select
            value={this.state.sortPost}
            onChange={(e) => this.sortPost(e)}
            input={<Input id="sortPost" />}
          >
            <MenuItem value="timestamp">Time</MenuItem>
            <MenuItem value="voteScore">Vote score</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

SortPosts.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default compose(
  withStyles(styles),
  connect(null, {
    sortPost
  })
)(SortPosts)
