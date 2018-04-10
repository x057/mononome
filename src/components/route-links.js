import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';

class RouteLinks extends Component {
	constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

	render() {
		return (
			<div className="route-links">
				<div className="route-link-list">
					<a className="route-link mononome" href="#sheran" />
					<a className="route-link watch-section" onClick={this.openModal}>watch</a>
					<a className="route-link tour-section" href="#tour">tour</a>
					<a className="route-link shop-section" href="https://mononome.bandcamp.com/merch" target="_blank">shop</a>
					<a className="route-link book-section" href="mailto:bookings@mononome.com">book</a>
				</div>
				<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='IL8yCSEnyv8' onClose={() => this.setState({isOpen: false})} />
			</div>
		);
	}
}

export default RouteLinks;
