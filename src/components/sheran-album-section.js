import _ from 'lodash';
import React, { Component } from 'react';

class SheranAlbumSection extends Component {
	get sheranAlbumLinks() {
		return {
			bandcamp: 'https://mononome.bandcamp.com/album/sher-n',
			spotify: 'https://open.spotify.com/album/6ZDU7ycqPrTK2lXS7LM9MF?si=yepKbcM4RJ-FXJiFyu0ijA',
			apple: 'https://itunes.apple.com/us/album/sher%C3%A1n-ep/1342782438',
			amazon: 'https://www.amazon.com/gp/product/B079G438JY/ref=dm_ws_sp_ps_dp'
		};
	}

	get sheranAlbumAnchors() {
		return _.map(this.sheranAlbumLinks, (link, service) => {
			const className = `social-icon ${service}`;
			return (
				<a className={className}
				   key={service}
				   href={link}
				   rel="noopener noreferrer"
				   target="_blank">
				</a>
			);
		});
	}

	render() {
		return (
			<div className="sheran-album-section section">
				<div className="sheran-album">
					<div className="sheran-album-title">Sherán</div>
					<div className="sheran-album-sub-title">out now</div>
					<div className="sheran-album-links">
						{this.sheranAlbumAnchors}
					</div>
				</div>
			</div>
		);
	}
}

export default SheranAlbumSection;