const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CHARACTER_MOVIES':
			return action.movies;
		default:
			return state;
	}
};
