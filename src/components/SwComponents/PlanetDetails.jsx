import React from 'react';

import ItemDetails from './../ItemDetails';
import Record from './../Record';

import { withSwapiService } from './../HocHelpers';

const PlanetDetails = (props) => {
	return(		
		<ItemDetails {...props} >
			<Record field="population" label="Population" />
			<Record field="rotationPeriod" label="Rotation" />
			<Record field="diameter" label="Diameter" />
		</ItemDetails>
	);
};

const mapMethodsToProps = (swapi) => {
	return {
		getData: swapi.getPlanet,
		getImageUrl: swapi.getImagePlanet,
	};
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);