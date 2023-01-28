import React from 'react';
import PropTypes from 'prop-types';

function FeedbackOptions ({ options, onLeaveFeedback }) {
    return options.map(option => (
        <button type="button" class="btn" key={option} name={option} onClick={onLeaveFeedback}>
        {option}</button>
    ))
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;