import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import './index.css';
import NavBar from './components/nav-bar';
import TourSection from './components/tour-section';
import SheranAlbumSection from './components/sheran-album-section';

class App extends Component {
  render() {
    return (
      		<div className="stage">
      			<NavBar />
            <div className="content">
              <ScrollableAnchor id={ 'sheran' }>
                <SheranAlbumSection />
              </ScrollableAnchor>
              <ScrollableAnchor id={ 'tour' }>
                <TourSection />
              </ScrollableAnchor>
            </div>
	        </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
