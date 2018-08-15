import React from 'react';
import {Projects} from "./Projects/Projects";

export class Main extends React.Component {

    render() {
        return (
            <Projects featuredOnly={true} />
        );
    }

}

Main.defaultProps = {};

Main.propTypes = {};
