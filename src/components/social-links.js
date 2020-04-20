import _ from 'lodash';
import React, { Component } from 'react';

class SocialLinks extends Component {
    renderSocialLinkListItems() {
        return _.chain(this.props.links)
            .map((link, service) => {
                const className = `social-icon ${_.kebabCase(service)}`;
                return (
                    <li className="social-link" key={service}>
							<a className={className}
								href={link}
								rel="noopener noreferrer"
								target="_blank"></a>
						</li>
                );
            })
            .valueOf();
    }
    render() {
        return (
            <div className="social-links">
				<ul className="social-link-list">
					{this.renderSocialLinkListItems()}
				</ul>
			</div>
        );
    }
}

export default SocialLinks;