import React, { Component } from 'react'
class ChatForm extends Component {
	render(){ 
		return (
			<form>
				<div className="form-group">
					<label htmlFor="message">Message</label>
					<textarea className="form-control" row="5" id="message"></textarea>
				</div>
				<button type="submit" className="btn btn-primary">send</button>
			</form>
		);
	}
}
export default ChatForm