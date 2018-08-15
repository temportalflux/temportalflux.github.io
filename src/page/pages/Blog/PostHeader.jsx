import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment/moment";
import {Header, Image} from "semantic-ui-react";
import {FaClock} from "react-icons/fa/index";
import PROPS from "./PostProps";
import * as lodash from "lodash";

export const PostHeader = ({teaser, title, date, description, header, icon}) => {
    return (
        <Header {...header}>
            {teaser && <Image src={teaser} circular {...icon} />}
            <Header.Content>
                {title}
                <Header.Subheader>
                    <FaClock/> {moment(date).format('YYYY.M.D')}
                    <br/>
                    {description}
                </Header.Subheader>
            </Header.Content>
        </Header>
    );
};

PostHeader.defaultProps = lodash.defaultsDeep({
    header: {},
    icon: {},
}, PROPS.defaultProps);

PostHeader.propTypes = lodash.defaultsDeep({
    header: PropTypes.object,
    icon: PropTypes.object,
}, PROPS.propTypes);
