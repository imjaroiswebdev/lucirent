import React from 'react';
import Photo from './Photo';

class PhotoGrid extends React.Component {
	render() {
		return (
			<div>
				<pre>
					{JSON.stringify(this.props.posts, null, ' ')}
				</pre>
			</div>
		)
	}
}

export default PhotoGrid;