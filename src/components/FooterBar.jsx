import React from 'react';
import {Divider, Header} from "semantic-ui-react";

export class FooterBar extends React.Component {

    render() {
        return (
            <div id={'footer'}>
                <Divider />
                <Header as={'h5'} textAlign={'center'} content={'© 2018 Dustin Yost.'} />
                <a
                    style={{ textAlign: 'center' }}
                    href={"https://github.com/temportalflux/temportalflux.github.io/tree/develop"}
                >Powered by Github</a>
            </div>
        );
    }

}

FooterBar.defaultProps = {};

FooterBar.propTypes = {};
