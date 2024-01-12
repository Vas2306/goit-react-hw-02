import PropTypes from 'prop-types';
import css from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        Good: <span>{good}</span>
      </li>
      <li className={css.item}>
        Neutral: <span>{neutral}</span>
      </li>
      <li className={css.item}>
        Bad: <span>{bad}</span>
      </li>
      <li className={css.item}>
        Total: <span>{total}</span>
      </li>
      <li className={css.item}>
        Positive: <span>{positiveFeedback}%</span>
      </li>
    </ul>
  );
};

export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};
