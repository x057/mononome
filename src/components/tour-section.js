import React, { Component } from 'react';

class TourSection extends Component {
  get artistId() {
    return 8232078;
  }

  get widgetUrl() {
    return `http://widget.songkick.com/songkick-widget.html?artist=${this.artistId}`;
  }

	get widget() {
    return (
      <iframe src={this.widgetUrl}></iframe>
    );
  }

	render() {
		return (
			<div className="tour-section section">
				{this.widget}
			</div>
		);
	}
}

export default TourSection;