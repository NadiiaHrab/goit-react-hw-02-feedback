import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from "../Statistics/Statistics";

class Feedback extends Component {

    static defaultProps = {
        initialGoodValue: PropTypes.number.isRequired,
        initialNeutralValue: PropTypes.number.isRequired,
        initialBadValue: PropTypes.number.isRequired,
    }

    state = {
        good: this.props.initialGoodValue,
        neutral: this.props.initialNeutralValue,
        bad: this.props.initialBadValue
    };
    
    onLeaveFeedback = e => {
        const optional = e.target.name;
        this.setState(prevState => {
            return {[optional]: prevState[optional] + 1 }})
    };

    countTotalFeedback = () => {
        const { good, neutral, bad} = this.state;
        const totalFeedback = good + neutral + bad;
        return totalFeedback;
    }

    countPositiveFeedbackPercentage = () => {

    }

    render() {
        const { good, neutral, bad } = this.state;

        return (
            <div class="container">
  <h2 class="feedback-title">Please leave feedback</h2>
        <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
                
    <h2 class="statistics-title">Statistics</h2>
        <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
                />
 
</div>
        )
    }
}

export default Feedback;
