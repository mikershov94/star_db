import React from 'react';

import ItemDetails from './../ItemDetails';
import Record from './../Record';

import { withSwapiService } from './../HocHelpers';

const StarshipDetails = (props) => {
	return(		
		<ItemDetails {...props} >
			<Record field="model" label="Model" />
			<Record field="length" label="Length" />
			<Record field="passengers" label="Passengers" />
		</ItemDetails>
	);
};

const mapMethodsToProps = (swapi) => {
	return {
		getData: swapi.getStarship,
		getImageUrl: swapi.getImageStarship,
	};
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);