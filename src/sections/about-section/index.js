import React, { Component } from 'react';

import AbstractSection from '../abstract-section';

import './styles.scss';

class AboutSection extends AbstractSection {
	render() {
		return (
			<div className="about-section section" style={this.sectionStyles}>
				{this.renderSectionTitle()}
				{this.renderSectionText()}
			</div>
		);
	}
}

export default AboutSection;