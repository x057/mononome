import YouTube from 'react-youtube';
import React, { Component } from 'react';

class WatchSection extends Component {
	get videoId() {
		return 'IL8yCSEnyv8';
	}

	get videoOptions() {
      return {
      	height: 480,
      	width: '100%',
      	playerVars: {
      		fs: 0,
      		rel: 0,
      		showinfo: 0,
      		controls: 0,
        	autoplay: 0,
        	iv_load_policy: 3,
        	modestbranding: true
      	}
      };
    }

	render() {
		return (
			<div className="watch-section section">
				<YouTube videoId={this.videoId} opts={this.videoOptions} />
			</div>
		);
	}
}

export default WatchSection;