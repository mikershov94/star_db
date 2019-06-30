import React from 'react';

import ItemDetails from './../ItemDetails';
import Record from './../Record';

import { withSwapiService } from './../HocHelpers';

const PlanetDetails = ({ itemId, swapi }) => {
	const { getPlanet, getImagePlanet } = swapi;
	return(		
		<ItemDetails itemId={itemId}
				 				 getData={getPlanet}
				 				 getImageUrl={getImagePlanet}>
			<Record field="population" label="Population" />
			<Record field="rotationPeriod" label="Rotation" />
			<Record field="diameter" label="Diameter" />
		</ItemDetails>
	);
};

export default withSwapiService(PlanetDetails);