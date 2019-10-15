import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';

export default function LocationCard(props) {
	// { name, type, dimension, residents })
	console.log(props);
	return (
		<div>
			<div className='Character-Card'>
				<Card height='5000px'>
					<CardImg src={props.image} width='100%' top />
					<CardBody height='100%'>
						<CardTitle fontSize='50px'>Character name: {props.name}</CardTitle>
						<hr />
						<CardText>Dimension: {props.status}</CardText>
						<CardText>Type: {props.type}</CardText>
						<CardText>link: {props.url}</CardText>
						<CardText>Created: {props.created}</CardText>
						{/* <CardText>Residents: {props.residents}</CardText> */}
					</CardBody>
				</Card>
			</div>
		</div>
	);
}
