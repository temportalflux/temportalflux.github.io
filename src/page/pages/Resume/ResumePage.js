import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {Education} from './Education';
import {Section} from "./Section";
import {List} from "./List";
import {Header} from "./Header";
import {LetterPage} from "./LetterPage";
import {Experience} from "./Experience";
import * as shortid from "shortid";

export class ResumePage extends React.Component
{

    componentDidMount()
    {
        const params = new URLSearchParams(this.props.params);
        if (params.has("print")) {
            const input = document.getElementById('resumeRoot');
            html2canvas(input)
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF();
                    pdf.addImage(imgData, 'JPEG', 0, 0);
                    pdf.save(`${params.get("print")}.pdf`);
                })
            ;
        }
    }

    render()
    {
        let experiences = this.props.resume.experience.map((position) => {
            return (
                <Experience
                    key={shortid.generate()}
                    id={'experience_' + position.company.trim() + '_' + position.title.trim()}
                    company={position.company}
                    location={position.location}
                    start={position.start}
                    end={position.end}
                    title={position.title}
                    responsibilities={position.responsibilities}
                />
            );
        });

        let educations = this.props.resume.education.map((education) => {
            return (
                <Education
                    key={shortid.generate()}
                    institution={education.institution}
                    location={education.location}
                    end={education.end}
                    degree={education.degree}
                    experiences={education.experiences}
                />
            );
        });

        return (
            <LetterPage
                id={"resumeRoot"}
            >
                <div
                    style={{
                        padding: '6.6mm',
                    }}
                >
                    <Header
                        id={"header"}
                        name={this.props.resume.author.name}
                        location={this.props.resume.author.location}
                        phone={this.props.resume.author.phone}
                        email={this.props.resume.author.email}
                        website={this.props.resume.author.website}
                    />

                    <Section
                        id={"skills"}
                        title={"Technical Skills"}
                    >
                        <List
                            items={this.props.resume.skills}
                        />
                    </Section>

                    <Section
                        id={"experience"}
                        title={"Experience"}
                    >
                        {experiences}
                    </Section>

                    <Section
                        id={"education"}
                        title={"Education"}
                    >
                        {educations}
                    </Section>

                </div>
            </LetterPage>
        );
    }
}
