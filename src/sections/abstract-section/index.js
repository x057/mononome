import React, { Component } from 'react';

import './styles.scss';

class AbstractSection extends Component {
	get section() {
		return this.props.section || {};
	}

	get sectionStyles() {
		return {
			backgroundSize: this.section.backgroundSize,
			backgroundPositionX: this.section.backgroundPositionX,
			backgroundPositionY: this.section.backgroundPositionY,
			backgroundImage: 'url(' + this.section.backgroundImage + ')'
		}
	}

	renderSectionTitle() {
		return (
			<h1 className="section-title">{this.section.title}</h1>
		);
	}

	renderSectionText() {
		return (
			<div className="section-text" dangerouslySetInnerHTML={{__html: this.section.text}} />
		);
	}
}

export default AbstractSection;