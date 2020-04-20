import _ from 'lodash';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';


import './index.css';
import { initStore } from './store';
import NavBar from './components/nav-bar';
import TourSection from './components/tour-section';
import AboutSection from './components/about-section';
import ReleasesSection from './components/releases-section';
import LatestReleaseSection from './components/latest-release-section';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      artist: {},
      releases: [],
      latestRelease: {}
    };
  }

  componentWillMount() {
    initStore()
      .then(({error, artist, releases, latestRelease}) => {
        this.setState({error, artist, releases, latestRelease});
      });
  }

  render() {

    return (
          <div className="stage">
            <NavBar socialLinks={this.state.artist.links} />
            <div className="content">
              <ScrollableAnchor id={ 'about' }>
                <AboutSection artist={this.state.artist} />
              </ScrollableAnchor>
              <ScrollableAnchor id={ 'latest-release' }>
                <LatestReleaseSection release={this.state.latestRelease} />
              </ScrollableAnchor>
              <ScrollableAnchor id={ 'releases' }>
                <ReleasesSection releases={this.state.releases} />
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
