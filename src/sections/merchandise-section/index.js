import React, { Component } from 'react';

import AbstractSection from '../abstract-section';

import './styles.scss';

class MerchandiseSection extends AbstractSection {
	render() {
		return (
			<div className="merchandise-section section" style={this.sectionStyles}>
				{this.renderSectionTitle()}
				{this.renderSectionText()}
			</div>
		);
	}
}

export default MerchandiseSection;