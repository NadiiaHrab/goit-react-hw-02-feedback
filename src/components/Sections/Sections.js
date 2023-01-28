import PropTypes from 'prop-types';
import css from "./Sections.module.css";

function Sections({title, children}) {
    return (
        <section className={css.section}>
            <h2 className={css.title}>{title}</h2>
            {children}
            </section>
    )
}
Sections.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default Sections;