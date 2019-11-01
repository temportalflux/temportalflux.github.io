import React from 'react';
import { Page } from "../Page";
import {Container, Header} from "semantic-ui-react";

export class Podcast extends React.Component
{

	constructor(props)
	{
		super(props);

		this.loadFeed = this.loadFeed.bind(this);

		this.state = {
			data: '',
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
		this.setState({ data: xml });
	}

	render()
	{
		console.log(this.state.data);
		return (
			<Page>
				TODO THIS NEEDS TO BE FILLED IN
			</Page>
		);
	}

}
