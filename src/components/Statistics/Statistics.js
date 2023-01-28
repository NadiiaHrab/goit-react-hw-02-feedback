import PropTypes from 'prop-types';
import css from "./Statistics.module.css";
import Notification from "../Notification";
function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <>
        {total ?
        <div className = {css.statisticsWrap}>
    <p className={css.text}>Good: {good}</p>
    <p className={css.text}>Neutral: {neutral}</p>
    <p className={css.text}>Bad: {bad}</p>
    <p className={css.text}>Total: {total}</p>
    <p className={css.text}>Positive Feedback: {positivePercentage}%</p>
    </div> : <Notification message="There is no feedback"></Notification>}
        
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