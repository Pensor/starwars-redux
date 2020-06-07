import React from 'react';
import { connect } from 'react-redux';

function CharacterProfile({ profile, world }) {
	return (
		<div id='character-profile' className='col-md-6'>
			<h1>Profile</h1>
			{profile.name && <p>Name: {profile.name}</p>}
			{profile.height && <p>Height: {profile.height}cm</p>}
			{profile.mass && <p>Weight: {profile.mass}kg</p>}
			{profile.gender && <p>Gender: {profile.gender}</p>}
			{world.name && <p>Homeworld: {world.name}</p>}
		</div>
	);
}

function mapStateToProps({ character: { profile, world } }) {
	return { profile, world };
}

export default connect(mapStateToProps)(CharacterProfile);
