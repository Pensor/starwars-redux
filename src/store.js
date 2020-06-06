import { applyMiddleware, createStore, compose } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { getCharacters } from './actions/setCharacters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
store.dispatch(getCharacters());

export default store;
