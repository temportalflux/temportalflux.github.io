import React from 'react';
import {Header, Pagination} from "semantic-ui-react";
import {Page} from "../../Page";
import POSTS from "../../../posts";
import moment from "moment";
import * as lodash from "lodash";
import {PostPreview} from "./PostPreview";
import * as shortid from "shortid";

export class Blog extends React.Component {

    constructor(props) {
        super(props);

        this.handleChangePage = this.handleChangePage.bind(this);
        this.getProjectsToDisplay = this.getProjectsToDisplay.bind(this);

        this.state = {
            activePage: 1,
            postsPerPage: 20,
        };
    }

    handleChangePage(e, {activePage}) {
        this.setState({ activePage: activePage });
    }

    getProjectsToDisplay() {
        return POSTS;
    }

    render() {
        let { category } = this.props.match.params;
        let { activePage, postsPerPage } = this.state;

        let firstPostIndex = (activePage - 1) * postsPerPage;

        let posts = this.getProjectsToDisplay();
        if (category) {
            posts = posts.filter((item) => item.categories.includes(category));
        }
        posts = lodash.sortBy(posts, (post) => moment(post.date));
        posts = lodash.reverse(posts);

        let totalPages = Math.floor(posts.length / postsPerPage) + Math.min(posts.length % postsPerPage, 1);
        posts = posts.slice(firstPostIndex, firstPostIndex + postsPerPage);

        posts = posts.map((post) => <PostPreview key={shortid.generate()} {...post} />);

        return (
            <Page>
                <Header content={'Blog'} textAlign={'center'} />

                { totalPages > 1 &&
                    <Pagination
                        totalPages={totalPages}
                        activePage={activePage}
                        firstItem={null}
                        lastItem={null}
                        pointing
                        secondary
                        onPageChange={this.handleChangePage}
                    />
                }

                {posts}

            </Page>
        );
    }

}

Blog.defaultProps = {};

Blog.propTypes = {};
