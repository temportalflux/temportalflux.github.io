import React from 'react';

export class List extends React.Component
{

    render()
    {
        let items = [];

        for (let key in this.props.items)
        {
            if (Array.isArray(this.props.items))
            {
                items.push((
                    <li key={key}>
                        {this.props.items[key]}
                    </li>
                ));
            }
            else
            {
                items.push((
                    <li key={key}>
                        <i>{key}</i>: {this.props.items[key]}
                    </li>
                ));
            }
        }

        return (
            <ul
                style={{
                    margin: 0,
                }}
            >
                {items}
            </ul>
        );
    }

}

List.defaultProps = {
};

List.propTypes = {
};
