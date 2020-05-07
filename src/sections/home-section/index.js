import React, { Component } from 'react';

import AbstractSection from '../abstract-section';
import SocialLinks from '../../components/social-links';

import './styles.scss';

class HomeSection extends AbstractSection {
	render() {
		const { links } = this.props.artist;

		return (
			<div className="home-section section" style={this.sectionStyles}>
				<SocialLinks links={links} />
			</div>
		);
	}
}

export default HomeSection;