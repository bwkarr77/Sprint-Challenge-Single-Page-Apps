import React, { useState } from 'react';

export default function SearchForm({ onSearch }) {
	const [searchFor, setSearchFor] = useState({
		name: ''
	});
	const handleChange = e => {
		setSearchFor({ ...searchFor, name: e.target.value });
	};

	return (
		<section className='search-form'>
			<form onSubmit={() => onSearch(searchFor)}>
				<input
					onChange={handleChange}
					placeholder='Waiting on you princess'
					value={searchFor.name}
					name='name'
				/>
				<button type='submit'>Search</button>
			</form>
		</section>
	);
}
