import React from 'react';
import { connect } from 'react-redux';

function CharacterWorld({ world }) {
	return (
		<div id='character-world' className='col-md-6'>
			<h1>World</h1>
			{world.name && <p>Name: {world.name}</p>}
			{world.population && <p>Population: {world.population}</p>}
			{world.diameter && <p>Diameter: {world.diameter}km</p>}
			{world.rotation_period && <p>Day Length: {world.rotation_period} Hours</p>}
			{world.orbital_period && <p>Year Length: {world.orbital_period} Days</p>}
			{world.climate && <p>Climate: {world.climate}</p>}
		</div>
	);
}

function mapStateToProps({ character: { world } }) {
	return { world };
}

export default connect(mapStateToProps)(CharacterWorld);
