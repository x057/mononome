import _ from 'lodash';
import React, { Component } from 'react';

import AbstractSection from '../abstract-section';
import Release from '../../components/release';

import './styles.scss';

export class ReleasesSection extends AbstractSection {
    renderReleaseItems() {
        return _.map(this.props.releases, (release) => {
            const{id} = release;
            return (
                <li className="releases-section-list-item" key={id}>
                  <Release release={release} />
                </li>
            );
        });
    }

    render() {
        return (
            <div className="releases-section section">
                {this.renderSectionTitle()}
              <ul className="releases-section-list">
                {this.renderReleaseItems()}
              </ul>
            </div>
        );
    }
}

export default ReleasesSection;