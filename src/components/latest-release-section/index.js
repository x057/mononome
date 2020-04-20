import _ from 'lodash';
import React, { Component } from 'react';

import ThirdPartyLinks from '../third-party-links';

class LatestReleaseSection extends Component {
	render() {
		const { title, releaseDate, image, bandcamp, spotify, iTunes, amazon } = this.props.release;

		const sectionStyles = {
			backgroundImage: 'url(' + image + ')'
		};

		return (
			<div className="latest-release-section section" style={sectionStyles}>
				<div className="latest-release">
					<div className="latest-release-title">{title}</div>
					<div className="latest-release-sub-title">{releaseDate}</div>
					<ThirdPartyLinks links={{bandcamp, spotify, iTunes, amazon}} />
				</div>
			</div>
		);
	}
}

export default LatestReleaseSection;