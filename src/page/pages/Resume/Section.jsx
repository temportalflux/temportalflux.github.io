import React from 'react';
import PropTypes from 'prop-types';

export class Section extends React.Component
{

    render()
    {
        return (
            <div
                id={this.props.id}
                style={{
                    padding: '5px',
                }}
            >
                <b
                    style={{
                        fontSize: 'large',
                    }}
                >
                    {this.props.title}
                </b>

                {this.props.children}

            </div>
        );
    }

}

Section.defaultProps = {
};

Section.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
