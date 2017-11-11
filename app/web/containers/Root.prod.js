import React, { Component } from 'react';
import { Provider }  from 'react-redux';
import PropTypes from 'prop-types';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <StockInsights />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
