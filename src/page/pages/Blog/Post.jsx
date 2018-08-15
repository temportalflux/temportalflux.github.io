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

    async loadMarkdown() {
        let response = await fetch(`${process.env.PUBLIC_URL}/posts/${this.props.markdown}.md`);
        let markdown = await response.text();
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
