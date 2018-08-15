import PropTypes from 'prop-types';

const PROPS = {
    defaultProps: {

        categories: [],

    },
    propTypes: {
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        markdown: PropTypes.string.isRequired,

        teaser: PropTypes.string,
        categories: PropTypes.arrayOf(PropTypes.string),
        language: PropTypes.string,

    }
};

export default PROPS;
