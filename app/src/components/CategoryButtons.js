import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getCategories } from '../actions/categoryActions'

import { withStyles } from 'material-ui/styles'
import amber from 'material-ui/colors/amber'
import Button from 'material-ui/Button'

const styles = theme => ({
  container: {
    marginTop: 30,
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
      <div className={classes.container}>
        {categories && categories.map(category => (
          <Link key={category.name} to={`/${category.path}`}>
            <Button
              color='primary'
              className={classes.button}
              >
                {category.name}
            </Button>
          </Link>
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
