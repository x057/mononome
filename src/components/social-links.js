import _ from 'lodash';
import React, { Component } from 'react';

class SocialLinks extends Component {
	get socialLinks() {
		return {
			spotify: 'https://open.spotify.com/artist/23Xbt1RdcMA2glA3aeHtZ3',
			apple: 'https://itunes.apple.com/us/artist/mononome/id617270095',
			bandcamp: 'https://mononome.bandcamp.com/',
			youtube: 'https://www.youtube.com/user/mononome2500',
			facebook: 'https://www.facebook.com/mononomeofficial',
			instagram: 'https://www.instagram.com/_mononome_/',
			soundcloud: 'https://soundcloud.com/mononome',
			twitter: 'https://twitter.com/_mononome_'
		}
	}
	get socialLinkListItems() {
		return _.chain(this.socialLinks)
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
					{this.socialLinkListItems}
				</ul>
			</div>
		);
	}
}

export default SocialLinks;
