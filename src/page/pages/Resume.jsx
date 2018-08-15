import React from 'react';
import {Header, List, Segment} from "semantic-ui-react";
import {Page} from "../Page";
import * as shortid from "shortid";

export class Resume extends React.Component {

    static toComponent(comp, array) {
        return array.map((item) => React.createElement(comp, { key: shortid.generate() }, item));
    }

    static toWorkExperience(position, location, duration, duties) {
        return (
            <Segment>
                <Header as={'h3'} content={position} subheader={location}/>
                {duration}
                <List bulleted>
                    {Resume.toComponent(List.Item, duties)}
                </List>
            </Segment>
        );
    }

    render() {
        // TODO: Make this a menu interface
        return (
            <Page>

                <Header as='h1' content={'Acting Long-Term Resume'}/>

                <Segment>
                    <Header as={'h2'} content={'Technical Skills'}/>
                    <List bulleted>
                        <List.Item><i>Languages</i>: C++, C# (.NET), Python, Java, Bash Shell, C</List.Item>
                        <List.Item><i>Libraries</i>: OpenGL, HLSL/Shaders, DirectX, ActionScript, Chromium Embedded
                            Framework</List.Item>
                        <List.Item><i>Web</i>: React, JavaScript, PHP, HTML, Twig/Jekyll/Liquid, CSS, AJAX</List.Item>
                        <List.Item><i>IDE</i>: Visual Studio, Unity, Unreal Editor 4, Flash/Flash Developer</List.Item>
                        <List.Item><i>Design</i>: Adobe Photoshop, Adobe Illustrator, Adobe Flash</List.Item>
                    </List>
                </Segment>

                <Segment>
                    <Header as={'h2'} content={'Education'}/>
                    <p style={{float: 'left'}}><i>Champlain College</i>, Burlington, VT</p>
                    <p style={{float: 'right'}}>May 2019</p>
                    <p>Bachelor of Science in Game Programming</p>
                    <p>Minor in Mathematics</p>
                </Segment>

                <Segment>
                    <Header as={'h2'} content={'Awards'}/>
                    <List bulleted>
                        <List.Item><i>President's List</i>: Fall 2017</List.Item>
                        <List.Item><i>Dean's List</i>: Fall 2015, Spring 2016, Fall 2016, Spring 2017, Spring
                            2018</List.Item>
                        <List.Item><i>2017 George Bradford Excellence Award</i> for demonstrated excellence in
                            citizenship and academics</List.Item>
                    </List>
                </Segment>

                <Segment>
                    <Header as={'h2'} content={'Experience'}/>

                    {Resume.toWorkExperience(
                        'Resident Assistant', 'Champlain College (Burlington, VT)', 'August 2016 - May 2018', [
                            'Developed a safe and inclusive community within residence halls',
                            'Helped residents with issues regarding roommates or room placement',
                            'Worked with residents to understand Champlain policies and deal with everyday life issues',
                            'Held programs/events to educate and engage residents in the hall and in the greater Champlain community',
                        ])}

                    {Resume.toWorkExperience(
                        'Game Engineer Internship', 'Disruptor Beam (Framingham, MA)', 'May 2018 - August 2018', [
                            'TODO'
                        ])}

                    {Resume.toWorkExperience(
                        'Software Development Internship', 'LORD Corp Microstrain (Williston, VT)', 'May 2017 - August 2017', [
                            'Worked in a Scrum team to develop release worthy software',
                            'Developed a software using JavaScript and C++ in a Chromium Embedded Framework',
                            'Created a network to take input from sensor data and use it in a Unity application',
                        ])}

                    {Resume.toWorkExperience(
                        'Instructor and Counselor', 'iDTech Camps (Villanova, PA)', 'May 2016 - August 2016', [
                            'Taught the basics of programming logic, as well as Java and C++ code in conjunction with Minecraft, to campers',
                            'Worked with youth age 10-17 to build understanding of the basics of how computers work',
                            'Facilitated outdoor activities and indoor games for campers ages 6-17',
                        ])}

                    {Resume.toWorkExperience(
                        'Computer Forensics/Programming Intern', 'Leahy Center for Digital Investigation (LCDI), Burlington, VT', 'January 2016 - May 2016', [
                            'Worked with a team of programmers to rebuild and redesign the LCDI’s internal website',
                            'Lead development of a website using Python, HTML, and JavaScript',
                            'Communicated with team members to address bugs and implement ideas',
                            'Presented the project to the public, with the team, at the end of the semester',
                            'Deployed the website and troubleshoot bugs as they appeared',
                        ])}

                    {Resume.toWorkExperience(
                        'Network Administrator', 'Leahy Center for Digital Investigation (LCDI), Burlington, VT', 'September 2015 - December 2015', [
                            'Provided technical support to the office and managed a large network dealing with sensitive information.',
                            'Fixed, updated, and assisted co-workers with software and hardware issues (Mac OS X, Linux, Windows)',
                            'Managed password databases, multiple servers, and security of confidential client-based information',
                        ])}

                </Segment>

            </Page>
        );
    }

}

Resume.defaultProps = {};

Resume.propTypes = {};
