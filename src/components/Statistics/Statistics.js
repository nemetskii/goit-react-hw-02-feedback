import React from 'react';
import PropTypes from 'prop-types';

export default class Statistics extends React.Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <span>
        <p style={{ color: 'green' }}>Good: {good}</p>
        <p style={{ color: '#15bee7' }}>Neutral: {neutral}</p>
        <p style={{ color: 'Red' }}>Bad: {bad}</p>
        <p style={{ fontWeight: 700 }}>Total: {total}</p>
        <p style={{ fontWeight: 700 }}>
          Positive feedback: {positivePercentage}
        </p>
      </span>
    );
  }
}
