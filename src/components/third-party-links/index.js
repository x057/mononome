import _ from 'lodash';
import React, { Component } from 'react';

class ThirdPartyLinks extends Component {
	renderThirdPartyLinkListItems() {
		return _.chain(this.props.links)
				.omitBy(_.isEmpty)
				.map((link, service_) => {
					const service = _.kebabCase(service_);
					const className = `social-icon ${service}`;
					return (
						<li className="third-party-link" key={service}>
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
			<div className="third-party-links">
				<ul className="third-party-link-list">
					{this.renderThirdPartyLinkListItems()}
				</ul>
			</div>
		);
	}
}

export default ThirdPartyLinks;
