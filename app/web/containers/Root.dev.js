import React, { Component } from 'react';
import { Provider }from 'react-redux';
import PropTypes from 'prop-types';
import Home from '../components/Router';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'

export default class Root extends Component {
  
  render() {
    return (
      <Provider store={this.props.store}>
          <Router>
            <Route path='/' component={Home} />
          </Router>
      </Provider>
    );
  }
}


Root.propTypes = {
  store: PropTypes.object,
};
