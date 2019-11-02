import React from 'react';
import { Page } from "../Page";
import {Container, Header, Image, Divider} from "semantic-ui-react";
import {parseString} from 'xml2js';
import AudioPlayer from "react-h5-audio-player";

const parseXml = async (xmlStr) => new Promise((resolve, reject) => {
	parseString(xmlStr, (err, result) => {
		if (err) reject(err);
		else resolve(result);
	});
});

export class Podcast extends React.Component
{

	constructor(props)
	{
		super(props);

		this.loadFeed = this.loadFeed.bind(this);

		this.state = {
			data: undefined,
		};
	}

	componentDidMount()
	{
		this.loadFeed().then();
	}

	static async loadFeed()
	{
	}

	async loadFeed()
	{
		let response = await fetch(`${process.env.PUBLIC_URL}/podcasts/${this.props.xml}`);
		let xml = await response.text();
		let obj = await parseXml(xml);
		this.setState({ data: obj });
	}

	createPodcastItem(itemXmlData)
	{
		return (
			<Container key={itemXmlData.guid[0]}>
				<Header as='h2'>{itemXmlData['itunes:order']}: {itemXmlData.title[0]}</Header>
				<p>{itemXmlData.description[0]}</p>
				<AudioPlayer
					src={itemXmlData.enclosure[0]['$'].url}
				/>
			</Container>
		);
	}

	render()
	{
		if (this.state.data === undefined)
		{
			return (
				<Page>
					LOADING...
				</Page>
			);
		}
		const data = this.state.data.rss.channel[0];
		const title = data.title[0];
		const description = data.description[0];
		const author = data['itunes:author'][0];
		const image = data['itunes:image'][0]['$'].href;
		return (
			<Page>
				<Header as='h1'>
					<Image src={image} size={'small'} spaced='right' />
					{title}
					<Header.Subheader>By: {author}</Header.Subheader>
					<Header.Subheader><a href={`/podcasts/${this.props.xml}`} target='_blank'>RSS Feed</a></Header.Subheader>
				</Header>
				<p>{description}</p>
				<Container>
					{data.item.map(this.createPodcastItem).reduce((accum, podcastItem, i) => {
						if (accum.length > 0) accum.push(<Divider key={data.item.length - i} />);
						accum.push(podcastItem);
						return accum;
					}, [])}
				</Container>
			</Page>
		);
	}

}
