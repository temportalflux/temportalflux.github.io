import React from 'react';
import {Page} from "../Page";

export class Reel extends React.Component {

    render() {
        return (
            <Page>
                <video style={{ width: '100%' }} controls>
                    <source src="/reel.mp4" type="video/mp4" />
                </video>
            </Page>
        );
    }

}

Reel.defaultProps = {};

Reel.propTypes = {};
