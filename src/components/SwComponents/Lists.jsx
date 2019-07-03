import React from 'react';

import ItemList from './../ItemList';
import { withData, withSwapiService, withChildFunction, compose } from './../HocHelpers';

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

const PersonList = compose(
										withSwapiService(mapPersonMethodsToProps),
										withData,
										withChildFunction(renderName)
									)(ItemList);

const PlanetList = compose(
										withSwapiService(mapPlanetMethodsToProps),
										withData,
										withChildFunction(renderName)
									)(ItemList);

const StarshipList = compose(
										withSwapiService(mapStarshipMethodsToProps),
										withData,
										withChildFunction(renderNameAndPassengers)
									)(ItemList);

export {
	PersonList,
	PlanetList,
	StarshipList,
};
