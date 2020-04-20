import React, { Component } from 'react';

class AboutSection extends Component {
	render() {
		const { about, image } = this.props.artist;

		const sectionStyles = {
			backgroundImage: 'url(' + image + ')'
		};

		return (
			<div className="about-section section" style={sectionStyles}>
				<div className="about">
					<div dangerouslySetInnerHTML={{__html: about}} />
				</div>
			</div>
		);
	}
}

export default AboutSection;