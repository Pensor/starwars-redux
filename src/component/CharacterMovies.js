import React from 'react';
import { connect } from 'react-redux';

function CharacterMovies({ movies }) {
	return (
		<div id='character-movies' className='col-md-6'>
			<h1>Movies</h1>
			<ul>
				{movies.map(movie => {
					const date = new Date(movie.release_date).toLocaleDateString();
					return (
						<li key={movie.title}>
							{movie.title} ({date})
						</li>
					);
				})}
			</ul>
		</div>
	);
}

function mapStateToProps({ character: { movies } }) {
	return { movies };
}

export default connect(mapStateToProps)(CharacterMovies);
