import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

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
            return {
                [optional]: prevState[optional] + 1,
        }
        }  
    )};


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

  <div class="statistics-text-wrap">
    <p class="statistics__text">Good: {good}</p>
    <p class="statistics__text">Neutral: {neutral}</p>
    <p class="statistics__text">Bad: {bad}</p>
    <p class="statistics__text">Total: </p>
    <p class="statistics__text">Positive Feedback: </p>
  </div>
 
</div>
        )
    }
}

export default Feedback;
