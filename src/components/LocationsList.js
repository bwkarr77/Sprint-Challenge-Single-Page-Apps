import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
	const [locations, setLocations] = useState([]);
	useEffect(() => {
		axios
			.get('https://rickandmortyapi.com/api/location/')
			.then(results => {
				console.log('locations:', results.data.results);
				setLocations(results.data.results);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<div className='Location-List'>
			{locations.map(location => (
				<LocationCard {...location} />
			))}
		</div>
	);
}
