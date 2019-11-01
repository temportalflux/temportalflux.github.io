import React from 'react';
import { withRouter } from "react-router-dom";
import { Page } from "../Page";
import { Header } from "semantic-ui-react";
import FEEDS from "../../podcasts";
import * as shortid from "shortid";

class PodcastList extends React.Component
{

	render()
	{
		return (
			<Page style={{ textAlign: "-webkit-center" }}>
				<Header content={'Podcasts'} />
				{FEEDS.map((info) => (
					<Header key={shortid.generate()}>
						<a href={`/podcasts/${info.path}`}>{info.title}</a>
						<Header.Subheader>
							<a href={`/podcasts/${info.xml}`} target='_blank'>RSS Feed</a> - <a href={info.source} target='_blank'>File source</a>
						</Header.Subheader>
					</Header>
				))}
			</Page>
		);
	}

}

export default withRouter(PodcastList);
