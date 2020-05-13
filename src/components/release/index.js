import _ from 'lodash';
import React, { Component } from 'react';

import ThirdPartyLinks from '../../components/third-party-links';

import './styles.scss';

export class Release extends Component {
    render() {
      const { title, releaseDate, image, bandcamp, spotify, iTunes, amazon } = this.props.release;
      const links = { bandcamp, spotify, iTunes, amazon };
      const href = _.chain(links).values().reject(_.isEmpty).first().valueOf() || '#';
      return (
        <div className="release">
          <a href={href}
            target="_blank"
            className="release-main-link">
            <h5>{title}</h5>
            <img src={image} />
          </a>
          <ThirdPartyLinks links={links} />
        </div>
      );
    }
}

export default Release;