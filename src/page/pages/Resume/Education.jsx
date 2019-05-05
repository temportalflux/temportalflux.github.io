import React from 'react';
import * as shortid from "shortid";

export class Education extends React.Component {

    render()
    {
        let experiences = this.props.experiences.map((experience) => {
            return (
                <li key={shortid.generate()}>{experience}</li>
            );
        });

        return (
            <div
                id="education_ChamplainCollege"
            >
                <div
                    style={{
                        float: 'left',
                    }}
                >
                    <i>{this.props.institution}</i>, {this.props.location}
                </div>
                <div
                    style={{
                        float: 'right',
                    }}
                >
                    {this.props.end}
                </div>
                <div
                    style={{
                        clear: 'both',
                    }}
                >
                    {this.props.degree}
                </div>
                <ul
                    style={{
                        margin: 0,
                    }}
                >
                    {experiences}
                </ul>
            </div>
        );
    }

}
