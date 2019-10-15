import React from 'react';
import NavBar from './NavBar';

export default function Header() {
	return (
		<header className='ui centered'>
			<h1 className='ui center'>Rick &amp; Morty Fan Page</h1>
			<NavBar />
		</header>
	);
}
