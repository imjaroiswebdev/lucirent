import React from 'react';
import { render } from 'react-dom';

import css from './assets/styles/style.styl';

// Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';


import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


// React Router Element
const router = (
	<Provider store={ store }>
		<Router history={ history }>
			<Route path="/" component={ App }>
				<IndexRoute component={ PhotoGrid }></IndexRoute>
				<Route path="/view/:postId" component={ Single }></Route>
			</Route>
		</Router>
	</Provider>
)

render(
	router,
	document.getElementById('root')
)