import React from 'react';

export class LetterPage extends React.Component
{
    render()
    {
        return (
            <div
                id={this.props.id}
                style={{
                    width: '210mm',//'215.9mm',
                    minHeight: '279.4mm',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                {this.props.children}
            </div>
        );
    }
}
