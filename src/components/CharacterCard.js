import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';

export default function CharacterCard(props) {
	const charKeys = Object.keys(props);
	console.log('props:', props);
	console.log('charKeys:', charKeys);
	// console.log('keys:', props.charKeys[0]); //Doesn't like this
	// console.log('props.id:', props.id);

	//  ["id", "name", "status", "species", "type", "gender", "origin", "location", "image", "episode", "url", "created"]
	// charKeys.map(each => console.log(props.each));  //not sure why this returns "undefined"

	return (
		<div className='Character-Card'>
			<Card height='5000px'>
				<CardImg src={props.image} width='100%' top />
				<CardBody height='100%'>
					<CardTitle fontSize='50px'>Character name: {props.name}</CardTitle>
					<hr />
					<CardText>Status: {props.status}</CardText>
					<CardText>Species: {props.species}</CardText>
					<CardText>Type: {props.type}</CardText>
					<CardText>Gender: {props.gender}</CardText>
					<CardText>link: {props.url}</CardText>
					<CardText>Created: {props.created}</CardText>
					{/* <h3>Origin: {props.origin}</h3> */}
					{/* <h3>{props.location}</h3> */}
					{/* <h3>{props.episode}</h3> */}
				</CardBody>
			</Card>
		</div>
	);
}
