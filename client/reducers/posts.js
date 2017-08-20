function posts(state=[], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES':
			const { index } = action;
			return state.filter((post, counter) => counter == index ? post.likes++ : post)
		default:
			return state;
	}
}

export default posts;