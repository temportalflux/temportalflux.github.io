import React from 'react';
import {Menu} from "semantic-ui-react";
import {DEFAULT_ROUTE, ROUTES} from "../Routes";
import * as lodash from 'lodash';
import * as shortid from "shortid";
import {NavLink, withRouter} from "react-router-dom";

class HeaderBar extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            active: lodash.toLower(DEFAULT_ROUTE.headerItem),
        };
    }

    handleClick(e, {name}) {
        this.setState({active: name});
    }

    render() {
        return (
            <Menu pointing secondary>
                {ROUTES.filter((item) => item.headerItem).map((route) => (
                    <Menu.Item
                        key={shortid.generate()}
                        as={NavLink}
                        to={route.link || route.path}
                        exact={route.exact}
                        {...route.headerItem}
                    />
                ))}
            </Menu>
        );
    }

}

HeaderBar.defaultProps = {};

HeaderBar.propTypes = {};

export default withRouter(HeaderBar);
