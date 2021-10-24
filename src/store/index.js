import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const middlewares = [];

export const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(...middlewares)
		// other store enhancers if any
	)
);
