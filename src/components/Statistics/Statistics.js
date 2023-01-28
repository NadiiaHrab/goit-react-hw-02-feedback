import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div class="statistics-text-wrap">
    <p class="statistics__text">Good: {good}</p>
    <p class="statistics__text">Neutral: {neutral}</p>
    <p class="statistics__text">Bad: {bad}</p>
    <p class="statistics__text">Total: {total}</p>
    <p class="statistics__text">Positive Feedback:{positivePercentage}%</p>
  </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}

export default Statistics;