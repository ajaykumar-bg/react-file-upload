import { ADD_FILE } from '../actions/action.types';

const filesReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_FILE:
			return [...state, action.payload];
		default:
			return state;
	}
};

export default filesReducer;
