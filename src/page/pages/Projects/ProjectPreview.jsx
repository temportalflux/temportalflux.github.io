import React from 'react';
import {Header, Image, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import moment from "moment";
import {Project} from "./Project";

export class ProjectPreview extends React.Component {

    render() {
        let { markdown, teaser, title, date, language } = this.props;
        return (
            <Segment
                as={Link}
                to={`/projects/${markdown}`}
            >
                {teaser && <Image src={teaser} />}
                <Header as='h1'>
                    {title}
                    <Header.Subheader>{moment(date).year()} {language}</Header.Subheader>
                </Header>
            </Segment>
        );
    }

}

ProjectPreview.defaultProps = Project.defaultProps;
ProjectPreview.propTypes = Project.propTypes;
