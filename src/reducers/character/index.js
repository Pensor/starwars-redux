import { combineReducers } from 'redux';
import id from './id';
import profile from './profile';
import world from './world';
import movies from './movies';

export default combineReducers({
	id,
	profile,
	world,
	movies,
});

// export default (state = null, action) => {
// 	switch (action.type) {
// 		case 'SET_CURRENT_CHARACTER':
// 			return action.id;
// 		case 'SET_CHARACTER_PROFILE':
// 			return action.profile;
// 		case 'SET_CHARACTER_WORLD':
// 			return action.world;
// 		case 'SET_CHARACTER_MOVIES':
// 			return action.movies;
// 		default:
// 			return state;
// 	}
// };
