import React, { Component } from 'react';

class RouteLinks extends Component {
	render() {
		return (
			<div className="route-links">
				<div className="route-link-list">
					<a className="route-link mononome" href="#sheran" />
					<a className="route-link watch-section" href="#watch">watch</a>
					<a className="route-link tour-section" href="#tour">tour</a>
					<a className="route-link buy-section" href="https://mononome.bandcamp.com/merch" target="_blank">buy</a>
					<a className="route-link buy-section" href="mailto:bookings@mononome.com">booking</a>
				</div>
			</div>
		);
	}
}

export default RouteLinks;