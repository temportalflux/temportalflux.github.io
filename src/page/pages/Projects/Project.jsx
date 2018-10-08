import React from 'react';
import PropTypes from 'prop-types';
import {Page} from "../../Page";
import Markdown from 'react-markdown';
import {Button, Header, Image, Segment} from "semantic-ui-react";
import {FaDownload, FaTwitter} from "react-icons/fa/index";
import {Post} from "../Blog/Post";

export class Project extends React.Component {

    constructor(props) {
        super(props);

        this.loadMarkdown = this.loadMarkdown.bind(this);
        this.renderSidebar = this.renderSidebar.bind(this);

        this.state = {
            markdown: '',
        };
    }

    componentDidMount() {
        this.loadMarkdown().then();
    }

    async loadMarkdown() {
        let markdown = await Post.loadMarkdown('raw_projects', this.props.markdown);
        console.log(markdown);
        this.setState({ markdown: markdown });
    }

    render() {
        return (
            <Page renderExtraSidebar={this.renderSidebar}>
                <Header as={'h1'}>
                    {this.props.title}
                    <Header.Subheader></Header.Subheader>
                </Header>

                { this.props.header && <Image src={`/raw_projects/${this.props.markdown}${this.props.header}`} /> }

                <Markdown
                    escapeHtml={false}
                    source={this.state.markdown}
                    style={{ width: '100%' }}
                />

            </Page>
        );
    }

    static renderEntry(title, value) {
        if (!value) return <div/>;
        else return <Header as={'h3'} content={title} subheader={value}/>;
    }

    renderSidebar() {
        let {
            title,
            description,
            twitter,
            timeframe,
            team,
            contribution,
            outcomes,
            executable,
            repository,
        } = this.props;

        if (Array.isArray(team)) team = team.join('. ');

        return (
            <Segment>
                <Header>
                    {title}
                    { description && <Header.Subheader>{description}</Header.Subheader> }
                </Header>

                { Project.renderEntry('Timeframe', timeframe) }

                { twitter &&
                    <a href={twitter}><FaTwitter /> Twitter</a>
                }

                { Project.renderEntry('Team', team) }
                { Project.renderEntry('Contribution', contribution) }
                { Project.renderEntry('Outcomes', outcomes) }

                { executable &&
                <Button as={'a'} href={executable}><FaDownload /> Executable</Button>
                }

                { repository &&
                <Button as={'a'} href={repository}><FaDownload /> Repository</Button>
                }

            </Segment>
        );
    }

}

Project.defaultProps = {

    teaser: undefined,

    portfolio: false,
    order: -1,


    description: undefined,
    twitter: undefined,
    timeframe: undefined,
    team: undefined,
    contribution: undefined,
    outcomes: undefined,
    executable: undefined,
    repository: undefined,

};

Project.propTypes = {

    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    markdown: PropTypes.string.isRequired,

    teaser: PropTypes.string,
    header: PropTypes.string,

    portfolio: PropTypes.bool,
    order: PropTypes.number,

    description: PropTypes.string,
    twitter: PropTypes.string,
    timeframe: PropTypes.string,
    team: PropTypes.oneOfType([ PropTypes.string, PropTypes.arrayOf(PropTypes.string) ]),
    contribution: PropTypes.string,
    outcomes: PropTypes.string,
    executable: PropTypes.string,
    repository: PropTypes.string,

};
