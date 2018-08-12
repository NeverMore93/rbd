import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';

import NavSidebar from './NavSidebar';

import Home from '../screens/Home';
import NotFound from '../screens/NotFound';
import Introduce from '../screens/Introduce';
import About from '../screens/About';

class Main extends Component {
  render() {
    return (
      <App centered={false}>
        <Router>
          <Box align={'center'} style={{ width: '100%' }}>
            <NavSidebar />
            <Switch>
              <Route exact={true} path='/' component={Home} />
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


const select = state => ({
  nav: state.nav
});

export default connect(select)(Main);
