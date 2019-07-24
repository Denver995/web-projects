import React from 'react'
const ChatForm = () => (
	<form>
		<div className="form form-group">
			<label for="message">Message</label>
			<textarea className="form-control" row="5" id="message"></textarea>
		</div>
		<button type="submit" className="btn btn-primary">send</button>
	</form>
)

export default ChatForm