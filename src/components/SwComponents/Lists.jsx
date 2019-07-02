import React from 'react';

import ItemList from './../ItemList';
import { withData, withSwapiService } from './../HocHelpers';

const withChildFunction = (Wrapped, fn) => {
	return (props) => {
		return(
			<Wrapped {...props} >
				{ fn }
			</Wrapped>
		);
	};
};

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndPassengers = ({name, passengers}) => <span>{`${name} (${passengers})`}</span>;

const mapPersonMethodsToProps = (swapi) => {
	return {
		getData: swapi.getAllPeople
	};
};

const mapPlanetMethodsToProps = (swapi) => {
	return {
		getData: swapi.getAllPlanets
	};
};

const mapStarshipMethodsToProps = (swapi) => {
	return {
		getData: swapi.getAllStarships
	};
};

const PersonList = withSwapiService(
													withData(
														withChildFunction(ItemList, renderName)), 
											mapPersonMethodsToProps);

const PlanetList = withSwapiService(
													withData(
														withChildFunction(ItemList, renderName)), 
											mapPlanetMethodsToProps);
const StarshipList = withSwapiService(
													withData(
														withChildFunction(ItemList, renderNameAndPassengers)), 
											mapStarshipMethodsToProps);

export {
	PersonList,
	PlanetList,
	StarshipList,
};
