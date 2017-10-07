import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    width: '100%',
  },
  title: {
    color: 'rgb(2, 204, 186)',
  }
})

function Header(props) {
  // 定義したスタイルがprops.classesとして渡される
  const classes = props.classes

  return (
    <div className={classes.root}>
      <Link to="/">
        <AppBar position="static" color="default" className={classes.title}>
          <Toolbar>
            <Typography type="title" color="inherit">
              Readable
            </Typography>
          </Toolbar>
        </AppBar>
      </Link>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
