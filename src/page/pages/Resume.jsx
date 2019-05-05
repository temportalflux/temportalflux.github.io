import React from 'react';
import {Button, Dropdown, Header, List, Menu, Segment} from "semantic-ui-react";
import {Page} from "../Page";
import * as shortid from "shortid";
import {resumes} from "./Resume/data";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {ResumePage} from "./Resume/ResumePage";

export class Resume extends React.Component {

    constructor(props) {
        super(props);

        this.onClickResumeType = this.onClickResumeType.bind(this);
        this.handleDownloadPDF = this.handleDownloadPDF.bind(this);

        this.state = {resumeType: 'general'};

    }

    static toComponent(comp, array) {
        return array.map((item) => React.createElement(comp, { key: shortid.generate() }, item));
    }

    static toWorkExperience(position, location, duration, duties) {
        return (
            <Segment key={shortid.generate()}>
                <Header as={'h3'} content={position} subheader={location}/>
                {duration}
                <List bulleted>
                    {Resume.toComponent(List.Item, duties)}
                </List>
            </Segment>
        );
    }

    onClickResumeType(e, { name }) {
        this.setState({ resumeType: name });
    }

    handleDownloadPDF() {
        const input = document.getElementById('resumeRoot');
        console.log(input);
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(`DustinYost-Resume.pdf`);
            })
        ;
    }

    render() {
        const { resumeType } = this.state;

        return (
            <Page>

                <Header as='h1' content={'Acting Long-Term Resume'}/>

                <Menu pointing>
                    {Object.keys(resumes).map((resumeTypeEach) => {
                        return (
                            <Menu.Item key={resumeTypeEach} name={resumeTypeEach} active={resumeTypeEach === resumeType} onClick={this.onClickResumeType} />
                        );
                    })}
                </Menu>

                <Button
                    onClick={this.handleDownloadPDF}
                >Download PDF</Button>

                <Segment>
                    <ResumePage resume={resumes[resumeType]} />
                </Segment>

            </Page>
        );
    }

}

Resume.defaultProps = {};

Resume.propTypes = {};
