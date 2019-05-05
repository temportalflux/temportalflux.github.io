import React from 'react';
import PropTypes from 'prop-types';

export class Header extends React.Component
{
    render()
    {
        return (
            <div
                id={this.props.id}
                style={{
                    textAlign: 'center',
                    padding: '5px',
                }}
            >
                <b
                    style={{
                        fontSize: 'x-large',
                    }}
                >
                    {this.props.name}
                </b>
                <br/>
                {this.props.location} | {this.props.phone}
                <br/>
                {this.props.email} | {this.props.website}
            </div>
        );
    }
}

Header.defaultProps = {};
Header.propTypes = {

};
