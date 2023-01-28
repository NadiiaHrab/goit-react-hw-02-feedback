import PropTypes from 'prop-types';

function Sections({title, children}) {
    return (
        <section>
            <h2 class="title">{title}</h2>
            {children}
            </section>
    )
}
Sections.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default Sections;