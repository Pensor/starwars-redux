const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CHARACTER_WORLD':
			return action.world;
		default:
			return state;
	}
};