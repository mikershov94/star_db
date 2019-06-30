import React from 'react';

import ItemDetails from './../ItemDetails';
import Record from './../Record';

import { withSwapiService } from './../HocHelpers';

const StarshipDetails = ({ itemId, swapi }) => {
	const { getStarship, getImageStarship } = swapi;
	return(		
		<ItemDetails itemId={itemId}
				 				 getData={getStarship}
				 				 getImageUrl={getImageStarship}>
			<Record field="model" label="Model" />
			<Record field="length" label="Length" />
			<Record field="passengers" label="Passengers" />
		</ItemDetails>
	);
};

export default withSwapiService(StarshipDetails);