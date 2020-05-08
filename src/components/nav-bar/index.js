import React, { Component } from 'react';

import './styles.scss';

class NavBar extends Component {
	render() {
		return (
			<nav className="nav-bar">
				  <div className="nav-bar-home">
				  	<a className="nav-bar-link mononome" href="#home" />
				  	<label for="nav-items-toggle"></label>
				  </div>
				  <input type="checkbox" id="nav-items-toggle"/>
			      <div id="nav-items">
			        <a className="nav-bar-link latest-release-section" href="#latest-release">latest release</a>
					<a className="nav-bar-link about-section" href="#about">about</a>
					<a className="nav-bar-link releases-section" href="#discography">discography</a>
					<a className="nav-bar-link merchandise-section" href="#merchandise">merchandise</a>
					<a className="nav-bar-link watch-section" href="#watch">watch</a>
					<a className="nav-bar-link tour-section" target="_blank" href="https://www.songkick.com/artists/8232078-mononome">tour</a>
					<a className="nav-bar-link contact-section" href="#contact">contact</a>
			      </div>
			</nav>
		);
	}
}

export default NavBar;