import React, { Component } from 'react';

import './styles.scss';

class RouteLinks extends Component {
    render() {
        return (
            <div className="route-links">
				<div className="route-link-list">
					<a className="route-link mononome" href="#home" />
					<a className="route-link latest-release-section" href="#latest-release">latest release</a>
					<a className="route-link about-section" href="#about">about</a>
					<a className="route-link releases-section" href="#discography">discography</a>
					<a className="route-link merchandise-section" href="#merchandise">merchandise</a>
					<a className="route-link watch-section" href="#watch">watch</a>
					<a className="route-link tour-section" target="_blank" href="https://www.songkick.com/artists/8232078-mononome">tour</a>
					<a className="route-link contact-section" href="#contact">contact</a>
				</div>
			</div>
        );
    }
}

export default RouteLinks;