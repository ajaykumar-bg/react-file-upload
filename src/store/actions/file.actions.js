import { ADD_FILE } from './action.types';

export function addFile(file) {
	return {
		type: ADD_FILE,
		payload: file,
	};
}
