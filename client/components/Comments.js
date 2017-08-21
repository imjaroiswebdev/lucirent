import React from 'react';


class Comments extends React.Component {
	renderComment(comment, index) {
		return(
			<div className="comment" key={index}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button
						className="remove-comment"
						onClick={() => this.props.removeComment(this.props.params.postId, index)}
					>&times;</button>
				</p>				
			</div>
		)
	}

	handleSubmit(event) {
		event.preventDefault();

		const { postId } = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;

		this.props.addComment(postId, author, comment);
		this.refs.commentForm.reset();
	}

	render() {
		const { postComments, postId } = this.props;

		return(
			<div className="comments">
				{ postComments.map(this.renderComment.bind(this)) }
				<form className="comment-form" ref="commentForm" onSubmit={(event) => this.handleSubmit(event)}>
					<input type="text" ref="author" placeholder="author" />
					<input type="text" ref="comment" placeholder="comment" />
					<input type="submit" hidden />
				</form>
			</div>
		)
	}
}

export default Comments;