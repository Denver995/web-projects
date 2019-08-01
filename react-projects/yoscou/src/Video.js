import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Video extends Component {

	static propTypes = {
		videoId: PropTypes.string.isRequired,
		action: PropTypes.oneOf(['Start Video Call', 'Receive Video Call']).isRequired,
		onClick: PropTypes.func.isRequired,
	}
	
	render(){
		return (
			<div className="container">
				<video id={this.props.videoId} autoPlay></video>
				<button className="btn btn-danger" onClick={ () => this.props.onClick(this.props.videoId)}>{this.props.action}</button>
			</div>
		)
	}
}

export default Video