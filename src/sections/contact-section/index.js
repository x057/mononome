import React, { Component } from 'react';

import AbstractSection from '../abstract-section';

import './styles.scss';

class ContactSection extends AbstractSection {
	render() {
		return (
			<div className="contact-section section" style={this.sectionStyles}>
				{this.renderSectionTitle()}
				{this.renderSectionText()}
			</div>
		);
	}
}

export default ContactSection;