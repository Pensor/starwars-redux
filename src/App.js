import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import CharacterList from './component/CharacterList';
import CharacterProfile from './component/CharacterProfile';
import CharacterWorld from './component/CharacterWorld';
import CharacterMovies from './component/CharacterMovies';
import store from './store';

function App() {
	// passing the store to all components inside the Provider vvv
	return (
		<Provider store={store}>
			<div className='container'>
				<div className='row'>
					<CharacterList />
					<CharacterProfile />
				</div>
				<div className='row'>
					<CharacterWorld />
					<CharacterMovies />
				</div>
			</div>
		</Provider>
	);
}

export default App;
