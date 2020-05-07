import React, { Component } from 'react';

import RouteLinks from '../route-links';

import './styles.scss';

class NavBar extends Component {
	render() {
		return (
			<div className="nav-bar">
				<RouteLinks />
			</div>
		);
	}
}

export default NavBar;