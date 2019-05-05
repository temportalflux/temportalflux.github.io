import React from 'react';
import {Section} from "./Section";
import {List} from "./List";

export class Experience extends React.Component
{
    render()
    {
        let durationText = undefined;
        if (this.props.end)
        {
            durationText = (
                <div
                    style={{
                        float: 'right',
                    }}
                >
                    {this.props.start} - {this.props.end}
                </div>
            );
        }
        else
        {
            durationText = (
                <div
                    style={{
                        float: 'right',
                    }}
                >
                    {this.props.start}
                </div>
            );
        }

        return (
            <div
                id={this.props.id}
                style={{
                    marginTop: '10px',
                    marginBottom: '10px',
                }}
            >
                <div
                    style={{
                        float: 'left',
                    }}
                >
                    <b>{this.props.company}</b>, {this.props.location}
                </div>

                {durationText}

                <div
                    style={{
                        clear: 'both',
                    }}
                >
                    <i>{this.props.title}</i>
                </div>

                <List
                    items={this.props.responsibilities}
                />
            </div>
        );
    }
}
