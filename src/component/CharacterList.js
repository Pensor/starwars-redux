import React from 'react';
import { connect } from 'react-redux';
import { setCurrentCharacter } from '../actions/setCurrentCharacter';

function CharacterList({ characters, setCharacter }) {
	return (
		<div id='character-list' className='col-md-6'>
			<h1 className='h1'>Characters</h1>
			<ul>
				{characters.map((c, i) => {
					return (
						<li key={c.name} onClick={setCharacter(i + 1)}>
							{c.name}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

function mapStateToProps(state) {
	return state;
}

const mapDispatchToProps = dispatch => ({
	setCharacter(id) {
		return () => {
			dispatch(setCurrentCharacter(id));
		};
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
