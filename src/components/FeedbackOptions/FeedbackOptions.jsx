import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option.id}
            className={css.button}
            type="button"
            id={option.id}
            onClick={onFeedback}
          >
            {option.name}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onFeedback: PropTypes.func,
};
