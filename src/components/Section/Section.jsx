import PropTypes from 'prop-types'
import css from './Section.module.css';
const Section = ({ title, children }) => {
  return (
    <section className={css.feedback}>
      <div>
        <h1 className={css.title}>{title}</h1>
        <p>Please leave your feedback about our service by selecting one of the options below.</p>
        {children}
      </div>
    </section>
  );
};

export default Section;
Section.propTypes = {
  title: PropTypes.string,
  children:PropTypes.node,
}