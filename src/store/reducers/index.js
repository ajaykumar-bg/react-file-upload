import { combineReducers } from 'redux';
import filesReducer from './files.reducer';

const rootReducer = combineReducers({
	files: filesReducer,
});

export default rootReducer;
