import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <>
    
    <div className = {css.statisticsWrap}>
    <p className={css.text}>Good: {good}</p>
    <p className={css.text}>Neutral: {neutral}</p>
    <p className={css.text}>Bad: {bad}</p>
    <p className={css.text}>Total: {total}</p>
    <p className={css.text}>Positive Feedback: {positivePercentage}%</p>
    </div> 
        
 </> 
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