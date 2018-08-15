import React from 'react';
import PropTypes from 'prop-types';
import {Page} from "../../Page";
import * as shortid from "shortid";
import {ProjectPreview} from "./ProjectPreview";
import PROJECTS from "../../../projects";
import {Grid} from "semantic-ui-react";
import * as lodash from "lodash";

export class Projects extends React.Component {

    constructor(props) {
        super(props);

        this.getProjectsToDisplay = this.getProjectsToDisplay.bind(this);

    }

    getProjectsToDisplay() {
        return PROJECTS.filter((info) => info.portfolio || !this.props.featuredOnly);
    }

    render() {
        let previews = this.getProjectsToDisplay();
        previews = lodash.sortBy(previews, (info) => -info.order);
        previews = previews.map((info) => <ProjectPreview {...info} />);

        let maxColumns = 3;
        let rows = [];
        let currentRow = [];
        let pushRow = () => {
            rows.push((
                <Grid.Row key={shortid.generate()} stretched>
                    {currentRow}
                </Grid.Row>
            ));
            currentRow = [];
        };
        while (previews.length > 0) {
            currentRow.push((
                <Grid.Column key={shortid.generate()} stretched>
                    {previews.shift()}
                </Grid.Column>
            ));
            if (currentRow.length >= maxColumns) {
                pushRow();
            }
        }
        if (currentRow.length > 0)
            pushRow();

        return (
            <Page>
                <Grid columns={maxColumns} stretched>
                    {rows}
                </Grid>
            </Page>
        );
    }

}

Projects.defaultProps = {
    featuredOnly: false,
};

Projects.propTypes = {

    featuredOnly: PropTypes.bool,

};
