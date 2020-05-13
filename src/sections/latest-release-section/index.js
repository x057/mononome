import _ from 'lodash';
import React, { Component } from 'react';

import AbstractSection from '../abstract-section';
import Release from '../../components/release';

import './styles.scss';

class LatestReleaseSection extends AbstractSection {
	render() {
		return (
			<div className="latest-release-section section" style={this.sectionStyles}>
				{this.renderSectionTitle()}
				<Release release={this.props.release} />
			</div>
		);
	}
}

export default LatestReleaseSection;