import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

const styles = theme => ({
  root: {
    width: '100%',
  },
  title: {
    color: 'rgb(2, 204, 186)',
  },
  flex: {
    flex: 1,
  },
  button: {
    margin: theme.spacing.unit,
    float: 'right',
  },
})

function Header(props) {
  // 定義したスタイルがprops.classesとして渡される
  const classes = props.classes

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Link className={classes.flex} to="/">
            <Typography type="title" >
              Readable
            </Typography>
          </Link>
          <Link className={classes.button} to="/new">
            <Button color="accent">
              New Post
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
