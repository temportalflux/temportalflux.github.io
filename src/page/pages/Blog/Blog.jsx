import React from 'react';
import {Header, Pagination, Divider} from "semantic-ui-react";
import {Page} from "../../Page";
import POSTS, {POST_HIGHLIGHTS} from "../../../posts";
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
            postsPerPage: 5,
            boundaryRange: 2,
            siblingRange: 2,
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
        let { activePage, postsPerPage, boundaryRange, siblingRange } = this.state;

        let firstPostIndex = (activePage - 1) * postsPerPage;

        let posts = this.getProjectsToDisplay();
        let highlights = POST_HIGHLIGHTS;
        if (category) {
            posts = posts.filter((item) => item.categories.includes(category));
            highlights = highlights.filter((item) => item.categories.includes(category));
        }

        posts = lodash.sortBy(posts, (post) => moment(post.date));
        highlights = lodash.sortBy(highlights, (post) => moment(post.date));
        posts = lodash.reverse(posts);
        highlights = lodash.reverse(highlights);

        let totalPages = Math.floor(posts.length / postsPerPage) + Math.min(posts.length % postsPerPage, 1);
        posts = posts.slice(firstPostIndex, firstPostIndex + postsPerPage);

        posts = posts.map((post) => <PostPreview key={shortid.generate()} {...post} />);
        highlights = highlights.map((post) => <PostPreview key={shortid.generate()} {...post} />);

        return (
            <Page style={{textAlign: "-webkit-center"}}>
                <Header content={'Blog'} />

                <Header content={'Highlights'} textAlign={'center'} />

                {highlights}

                <Divider />

                <Header content={"All Posts"} textAlign={'center'} />

                { totalPages > 1 &&
                    <div
                        style={{
                            display: "block",
                            width: "100%",
                            textAlign: "-webkit-center",
                        }}
                    >
                        <Pagination
                            totalPages={totalPages}
                            activePage={activePage}
                            boundaryRange={boundaryRange}
                            siblingRange={siblingRange}
                            firstItem={null}
                            lastItem={null}
                            pointing
                            secondary
                            onPageChange={this.handleChangePage}
                        />
                    </div>
                }

                {posts}

            </Page>
        );
    }

}

Blog.defaultProps = {};

Blog.propTypes = {};
