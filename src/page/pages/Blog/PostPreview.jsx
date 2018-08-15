import React from 'react';
import {Label, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {PostHeader} from "./PostHeader";
import PROPS from "./PostProps";
import * as shortid from "shortid";

export class PostPreview extends React.Component {

    render() {
        return (
            <Segment>
                {/* TODO: Float left */}
                <div>
                    <Link to={`/posts/${this.props.markdown}`}>
                        <PostHeader {...this.props} icon={{ size: 'massive' }} />
                    </Link>
                </div>

                {/* TODO: Float right and gridish */}
                <div>
                    {this.props.categories.map((category) => (
                        <Label key={shortid.generate()} as={Link} to={`/blog/${category}`}>
                            {category}
                        </Label>
                    ))}
                </div>
            </Segment>
        );
    }

}

PostPreview.defaultProps = PROPS.defaultProps;
PostPreview.propTypes = PROPS.propTypes;
