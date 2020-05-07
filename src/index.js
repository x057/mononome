import _ from 'lodash';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import ScrollableAnchor from 'react-scrollable-anchor';


import './styles.scss';
import { initStore } from './store';
import NavBar from './components/nav-bar';
import TourSection from './sections/tour-section';
import HomeSection from './sections/home-section';
import WatchSection from './sections/watch-section';
import AboutSection from './sections/about-section';
import ContactSection from './sections/contact-section';
import ReleasesSection from './sections/releases-section';
import MerchandiseSection from './sections/merchandise-section';
import LatestReleaseSection from './sections/latest-release-section';

import * as serviceWorker from './serviceWorker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      artist: {},
      releases: [],
      latestRelease: {},
      sections: {},
      videos: []
    };
  }

  componentWillMount() {
    initStore()
      .then(({error, artist, releases, latestRelease, sections, videos}) => {
        this.setState({error, artist, releases, latestRelease, sections, videos});
      });
  }

  openModal(id) {
    this.setState({ [id]: true })
  }

  closeModal(id) {
    this.setState({ [id]: false })
  }

  renderModalVideos() {
    return _.map(this.state.videos, ({id}) => {
      return <ModalVideo channel='youtube' isOpen={this.state[id]} videoId={id} onClose={() => this.closeModal(id)} />
    });
  }

  render() {
    return (
          <div className="stage">
            {this.renderModalVideos()}
            <NavBar socialLinks={this.state.artist.links} />
            <div className="content">
              <ScrollableAnchor id={ 'home' }>
                <HomeSection artist={this.state.artist} section={this.state.sections.home} />
              </ScrollableAnchor>
              <ScrollableAnchor id={ 'latest-release' }>
                <LatestReleaseSection release={this.state.latestRelease} section={this.state.sections.latestRelease} />
              </ScrollableAnchor>
              <ScrollableAnchor id={ 'about' }>
                <AboutSection section={this.state.sections.about} />
              </ScrollableAnchor>
              <ScrollableAnchor id={ 'discography' }>
                <ReleasesSection releases={this.state.releases} section={this.state.sections.discography} />
              </ScrollableAnchor>
              <ScrollableAnchor id={ 'merchandise' }>
                <MerchandiseSection section={this.state.sections.merchandise} />
              </ScrollableAnchor>
              <ScrollableAnchor id={ 'watch' }>
                <WatchSection videos={this.state.videos} section={this.state.sections.watch} openModal={this.openModal.bind(this)} />
              </ScrollableAnchor>
              <ScrollableAnchor id={ 'contact' }>
                <ContactSection section={this.state.sections.contact} />
              </ScrollableAnchor>
            </div>
          </div>
    );
  }
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
