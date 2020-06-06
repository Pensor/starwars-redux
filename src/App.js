import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import CharacterList from './component/CharacterList';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<div className='container'>
				<div className='row'>
					<CharacterList />
				</div>
			</div>
		</Provider>
	);
}

export default App;
