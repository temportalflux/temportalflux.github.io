import React from 'react';

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
		let response = await fetch(`${process.env.PUBLIC_URL}/podcasts/${this.props.path}`);
		let xml = await response.text();
		this.setState({ data: xml });
	}

	render()
	{
		return this.state.data;
	}

}
