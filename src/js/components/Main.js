import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';

import NavSidebar from './NavSidebar';
import { navResponsive } from '../actions/nav';

import Dashboard from '../screens/Dashboard';
import Tasks from '../screens/Tasks';
import Task from '../screens/Task';
import Home from '../screens/Home';
import NotFound from '../screens/NotFound';
import Introduce from '../screens/Introduce';
import About from '../screens/About';

class Main extends Component {
  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this);
  }

  _onResponsive(responsive) {
    this.props.dispatch(navResponsive(responsive));
  }

  render() {
    return (
      <App centered={false}>
        <Router>
          <Box align={'center'} style={{ width: '100%' }}>
            <NavSidebar />
            <Switch>
              <Route exact={true} path='/' component={Home} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/tasks/:id' component={Task} />
              <Route path='/tasks' component={Tasks} />
              <Route path='/home' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/introduce' component={Introduce} />
              <Route path='/*' component={NotFound} />
            </Switch>
          </Box>
        </Router>
      </App>
    );
  }
}

Main.defaultProps = {
  nav: {
    active: true, // start with nav active
    enabled: true, // start with nav disabled
    responsive: 'multiple'
  }
};

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    active: PropTypes.bool,
    enabled: PropTypes.bool,
    responsive: PropTypes.string
  })
};

const select = state => ({
  nav: state.nav
});

export default connect(select)(Main);
