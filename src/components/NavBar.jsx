import React, { Component } from 'react';
import { Route, NavLink, Switch, Link } from 'react-router-dom';
import LocationsList from './LocationsList';
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';

const NavBar = () => {
	return (
		<div>
			<div className='NavBar-Banner'>
				<div className='NavBar'>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/CharacterList'>Characters</NavLink>
					<NavLink to='/LocationsList'>Locations</NavLink>
				</div>
				<Switch>
					<Route exact path={'/'} component={WelcomePage} />
					<Route exact path={'/CharacterList'} component={CharacterList} />
					<Route exact path={'/LocationsList'} component={LocationsList} />
				</Switch>
			</div>
		</div>
	);
};

export default NavBar;
