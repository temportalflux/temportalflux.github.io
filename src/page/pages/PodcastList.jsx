import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { Page } from "../Page";
import { Header, Button, Icon } from "semantic-ui-react";
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
					<Header
						key={shortid.generate()}
						to={`/podcasts/${info.path}`}
						as={NavLink}
						exact={true}
						target='_blank'
					>{info.title}</Header>
				))}
			</Page>
		);
	}

}

export default withRouter(PodcastList);