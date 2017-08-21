// Take care of likes increment
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// Register comment adding
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

// Register resulting of erasing comments
export function removeComment(postId, index) {
	return {
		type: 'REMOVE_COMMENT',
		postId,
		index
	}
}