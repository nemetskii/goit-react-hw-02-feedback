import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default class FeedbackOptions extends React.Component {
  static propTypes = {
    onLeaveFeedBack: PropTypes.elementType,
  };
  render() {
    const { onLeaveFeedback } = this.props;

    return (
      <div>
        {this.props.options.map((option, index) => {
          return (
            <button
              key={index}
              className={css.btn}
              onClick={evt => onLeaveFeedback(evt)}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}
