import _ from 'lodash';
import React, { Component } from 'react';

import ThirdPartyLinks from '../third-party-links';

import './styles.scss';

export class ReleasesSection extends Component {
    renderReleaseItems() {
        return _.map(this.props.releases, ({ id, title, image, bandcamp, spotify, iTunes, amazon }) => {
            const links = { bandcamp, spotify, iTunes, amazon };
            const href = _.chain(links).values().reject(_.isEmpty).first().valueOf() || '#';
            return (
                <li className="releases-section-list-item" key={id}>
                  <a href={href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="releases-section-list-item-main-link">
                    <h5>{title}</h5>
                    <img src={image} />
                  </a>
                  <ThirdPartyLinks links={links} />
                </li>
            );
        });
    }

    render() {
        return (
            <div className="releases-section section">
              <ul className="releases-section-list">
                {this.renderReleaseItems()}
              </ul>
            </div>
        );
    }
}

export default ReleasesSection;