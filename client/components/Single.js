import React from 'react';
import Photo from './Photo'
import Comments from './Comments';

class Single extends React.Component {
	render() {
		const { posts, params, comments } = this.props;

		// Select the post by its id
		const index = posts.findIndex((post) => post.code === params.postId);
		const post = posts[index];

		// Pass the comments
		const postComments = comments[params.postId] || [];

		return (
			<div className="single-photo">
				<Photo index={index} post={post} { ...this.props } />
				<Comments postComments={postComments} { ...this.props } />
			</div>
		)		
	}
}

export default Single;