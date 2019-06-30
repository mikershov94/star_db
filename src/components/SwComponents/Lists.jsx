import React from 'react';

import ItemList from './../ItemList';
import { withData } from './../HocHelpers';
import SwapiService from './../../services/swapi-service';

const swapi = new SwapiService();

const {
	getAllPeople,
	getAllPlanets,
	getAllStarships
} = swapi;

const renderName = (Wrapped) => {
	return (props) => {
		return(
			<Wrapped {...props} >
				{ ({name}) => { return( <span>{name}</span> ); } }
			</Wrapped>
		);
	};
};

const PersonList = withData(renderName(ItemList), getAllPeople);
const PlanetList = withData(renderName(ItemList), getAllPlanets);
const StarshipList = withData(renderName(ItemList), getAllStarships);

export {
	PersonList,
	PlanetList,
	StarshipList,
};
