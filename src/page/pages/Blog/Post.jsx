import React from 'react';
import {Page} from "../../Page";
import PROPS from "./PostProps";
import {PostHeader} from "./PostHeader";
import {Divider} from "semantic-ui-react";
import Markdown from 'react-markdown';

export class Post extends React.Component {

    constructor(props) {
        super(props);

        this.loadMarkdown = this.loadMarkdown.bind(this);

        this.state = {
            markdown: '',
        };
    }

    componentDidMount() {
        this.loadMarkdown().then();
    }

    static async loadMarkdown(rawFolderName, markdownBasename) {
        let pathPublic = process.env.PUBLIC_URL;
        let pathPublicResources = `${pathPublic}/${rawFolderName}`;
        let pathMarkdown = `${pathPublicResources}/${markdownBasename}`;
        let response = await fetch(`${pathMarkdown}.md`);
        let markdown = await response.text();
        return [
            [`\\\${PATH_RESOURCES}`, `${pathPublicResources}`],
            [`\\\${PATH_MARKDOWN}`, `${pathMarkdown}`],
            [`\\\${PATH_MARKDOWN_LOCAL}`, `/${rawFolderName}/${markdownBasename}`],
        ].reduce((markdownOut, replacement) => {
            return markdownOut.replace(new RegExp(replacement[0], 'g'), replacement[1]);
        }, markdown);
    }

    async loadMarkdown() {
        let markdown = await Post.loadMarkdown('raw_posts', this.props.markdown);
        console.log(markdown);
        this.setState({ markdown: markdown });
    }

    render() {
        return (
            <Page>

                <PostHeader {...this.props} header={{ as: 'h1' }}/>
                <Divider />
                <Markdown
                    escapeHtml={false}
                    source={this.state.markdown}
                    style={{ width: '100%', overflowX: 'scroll' }}
                />

            </Page>
        );
    }

}

Post.defaultProps = PROPS.defaultProps;
Post.propTypes = PROPS.propTypes;
