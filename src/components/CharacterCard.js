import React from 'react';

export default function CharacterCard(props) {
	const charKeys = Object.keys(props);
	console.log('props:', props);
	console.log('charKeys:', charKeys);
	// console.log('keys:', charKeys[0]);
	// console.log('props.id:', props.id);
	// console.log('props.charKeys:', props.charKeys[0]);

	//  ["id", "name", "status", "species", "type", "gender", "origin", "location", "image", "episode", "url", "created"]
	// charKeys.map(each => console.log(props.each));  //not sure why this returns "undefined"

	return (
		<div className='Character-Card'>
			<h2>{props.name}</h2>
			{/* <h3>{props.charKeys[0]}</h3> */}
			{/* <h3>{props.id}</h3>
			<h3>{props.name}</h3>
			<h3>{props.status}</h3>
			<h3>{props.species}</h3>
			<h3>{props.type}</h3>
			<h3>{props.gender}</h3>
			<h3>{props.origin}</h3> */}
			{/* <h3>{props.location}</h3> */}
			{/* <h3>{props.image}</h3>
			<h3>{props.episode}</h3>
			<h3>{props.url}</h3>
			<h3>{props.created}</h3> */}
		</div>
	);
}
