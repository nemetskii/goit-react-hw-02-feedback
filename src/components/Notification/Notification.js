import React from 'react';
import PropTypes from 'prop-types';

export default class Notification extends React.Component {
  static = {
    message: PropTypes.string.isRequired,
  };
  render() {
    return <p>{this.props.message}</p>;
  }
}
