import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.js';
import Section from './Section/Section.js';
import Statistics from './Statistics/Statistics.js';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = e => {
    const option = e.target.innerText.toLowerCase();
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    let totalFeedBack = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0
    );
    return totalFeedBack;
  };
  countPositiveFeedbackPercentage = () => {
    let positiveFeedbacks = 0;
    if (this.countTotalFeedback()) {
      positiveFeedbacks = (this.state.good / this.countTotalFeedback()) * 100;
    }
    return positiveFeedbacks.toFixed() + '%';
  };
  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onButtonClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <p>There is no Feedback</p>
          )}
        </Section>
      </>
    );
  }
}
