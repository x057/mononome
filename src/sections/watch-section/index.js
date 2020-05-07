import _ from 'lodash';
import React, { Component } from 'react';

import AbstractSection from '../abstract-section';

import './styles.scss';

export class WatchSection extends AbstractSection {
    renderWatchItems() {
        return _.map(this.props.videos, ({id, thumbnail, title}) => {
            const styles = {
                backgroundImage: 'url(' + thumbnail + ')'
            };

            return (
                <li className="watch-section-list-item" key={id} style={styles}>
                  <a onClick={() => this.props.openModal(id)}>
                    <h5>{title}</h5>
                  </a>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="watch-section section">
                {this.renderSectionTitle()}
              <ul className="watch-section-list">
                {this.renderWatchItems()}
              </ul>
            </div>
        );
    }
}

export default WatchSection;