import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getCategories } from '../actions'

import { withStyles } from 'material-ui/styles'
import amber from 'material-ui/colors/amber'
import Button from 'material-ui/Button'

const styles = theme => ({
  root: {
    marginTop: 20,
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing.unit,
    color: amber[300],
  },
})

class CategoryButtons extends Component {

  render() {
    const { classes, categories } = this.props

    return (
      <div className={classes.root}>
        {categories && categories.map(category => (
          <Button
            key={category.name}
            color='primary'
            className={classes.button}
            >
              {category.name}
          </Button>
        ))}
      </div>
    )
  }
}

CategoryButtons.propTypes = {
  classes: PropTypes.object.isRequired,
}

function mapStateToProps({ categories }) {
  return {
    categories
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, {
    getCategories
  })
)(CategoryButtons)
