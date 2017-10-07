import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Tabs, { Tab } from 'material-ui/Tabs'

function TabContainer(props) {
  return <div style={{ padding: 20 }}>{props.children}</div>
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 7,
    backgroundColor: theme.palette.background.paper,
  },
})

class CategoryTabs extends Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          centered
          >
            <Tab label="react" href="#basic-tabs" />
            <Tab label="redux"/>
            <Tab label="udacity"/>
        </Tabs>
        {value === 0 && <TabContainer>{'react'}</TabContainer>}
        {value === 1 && <TabContainer>{'redux'}</TabContainer>}
        {value === 2 && <TabContainer>{'udacity'}</TabContainer>}
      </div>
    )
  }
}

CategoryTabs.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CategoryTabs)
