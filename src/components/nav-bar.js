import React, { Component } from 'react';

import RouteLinks from './route-links';
import SocialLinks from './social-links';

class NavBar extends Component {
	render() {
		return (
			<div className="nav-bar">
				<RouteLinks />
				<SocialLinks />
			</div>
		);
	}
}

export default NavBar;