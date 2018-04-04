import _ from 'lodash';
import React, { Component } from 'react';

class SocialLinks extends Component {
	get socialLinks() {
		return {
			spotify: 'https://open.spotify.com/follow/1/?uri=spotify:artist:23Xbt1RdcMA2glA3aeHtZ3&size=basic&theme=light&show-count=0',
			apple: 'https://itunes.apple.com/us/artist/mononome/id617270095',
			bandcamp: 'https://mononome.bandcamp.com/',
			youtube: 'https://www.youtube.com/user/mononome2500',
			facebook: 'https://www.facebook.com/mononomeofficial',
			instagram: 'https://www.instagram.com/_mononome_/',
			soundcloud: 'https://soundcloud.com/mononome',
			twitter: 'https://twitter.com/_mononome_'
		}
	}
	get spotifyButton() {
		return (
			<li className="social-link" key="spotify">
				<iframe src={this.socialLinks.spotify}
						scrolling="no"
						frameborder="0"
						style={{border: 'none', overflow: 'hidden'}}
						allowtransparency="true"></iframe>
			</li>
		);
	}
	get socialLinkListItems() {
		return _.chain(this.socialLinks)
				.omit('spotify')
				.map((link, service) => {
					const className = `social-icon ${service}`;
					return (
						<li className="social-link" key={service}>
							<a className={className}
								href={link}
								rel="noopener noreferrer"
								target="_blank"></a>
						</li>
					);
				})
				.value();
	}
	render() {
		return (
			<div className="social-links">
				<ul className="social-link-list">
					{this.spotifyButton}
					{this.socialLinkListItems}
				</ul>
			</div>
		);
	}
}

export default SocialLinks;