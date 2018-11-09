import React from 'react';
import PropTypes from 'prop-types';
import {FooterBar} from "../components/FooterBar";
import {Container, Grid, Header, Image, List, Segment} from "semantic-ui-react";
import HeaderBar from "../components/HeaderBar";
import {SETTINGS} from "../Settings";
import * as shortid from "shortid";
import {MAX_HEIGHT_STYLE} from "../Style";

export class Page extends React.Component {

    constructor(props) {
        super(props);

        this.handleRefContext = this.handleRefContext.bind(this);

        this.state = {
            context: undefined,
        };
    }

    handleRefContext(ref) {
        this.setState({ context: ref });
    }

    createIconLink(icon, text, link) {
        let comp = [
            React.createElement(icon, { key: 'i', color: "blue" }),
            ' ',
            <span key='s' itemProp="name">{text}</span>,
        ];
        let parent = 'div';
        let props = {
            children: comp,
        };
        if (link) {
            parent = 'a';
            props.href = link;
            props.target = '_blank';
        }
        return React.createElement(parent, props);
    }

    render() {
        return (
            <Grid divided {...MAX_HEIGHT_STYLE}>

                <Grid.Column width={4}>
                    <Segment
                        vertical
                        raised
                        style={{ padding: '1em' }}
                    >
                        <Header as={'h2'}>
                            <Image src={SETTINGS.author.logo} size={'small'} spaced='right' />
                            {SETTINGS.author.name}
                        </Header>

                        <Image
                            src={SETTINGS.author.avatar}
                            style={{
                                maxWidth: '60%',
                                borderRadius: '50%',
                            }}
                            centered
                        />
                        <Header subheader={SETTINGS.author.bio} />
                        <List>
                            {SETTINGS.author.contact.filter((item) => item).map((item) => (
                                <List.Item key={shortid.generate()}>
                                    {this.createIconLink(item.icon, item.text, item.link)}
                                </List.Item>
                            ))}
                        </List>

                        {this.props.renderExtraSidebar && this.props.renderExtraSidebar()}

                    </Segment>
                </Grid.Column>

                <Grid.Column width={12}>

                    <HeaderBar/>
                    <Container fluid>
                        {this.props.children}
                    </Container>
                    <FooterBar/>

                </Grid.Column>

            </Grid>
        );
    }

}

Page.defaultProps = {
    renderExtraSidebar: undefined,
};

Page.propTypes = {
    renderExtraSidebar: PropTypes.func,
};
