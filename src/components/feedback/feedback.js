import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sections from "../Sections";
import FeedbackOptions from '../FeedbackOptions';
import Statistics from "../Statistics";
import Notification from "../Notification";

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
        const { good, neutral, bad } = this.state;
        this.positivePercentage = Math.round((good / (good + neutral + bad)) * 100);
        if (this.positivePercentage) {
            return this.positivePercentage;
        } else {
            return 0;   
 }
    }

    render() {
    const { good, neutral, bad } = this.state;

        return (
        <>
    <Sections title="Please leave feedback">
        <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
        />
    </Sections> 

    <Sections title="Statistics">
    {this.state.good >= 1 ?
    <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
        /> : <Notification message="There is no feedback"></Notification>}             
                </Sections>
    </>
        )
    }
}

export default Feedback;
