function postComments(state = [], action) {
	switch(action.type) {
		case 'ADD_COMMENT':
			return [...state,{
				user: action.author,
				text: action.comment
			}]
		case 'REMOVE_COMMENT':
			return state.filter((comment, counter) => counter !== action.index)
		default:
			return state;
	}
}

// It was used reducers composition to actually sellect corresponding
// post in the comments object and call postComments reducer
function comments(state=[], action) {
	if (typeof action.postId !== 'undefined') {
		return {
			...state,
			// Adds a new comment to the key of comments objects
			// corresponding to this post
			[action.postId]: postComments(state[action.postId], action)
		}
	}

	return state;
}

export default comments;