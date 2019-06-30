import React from 'react';

import ItemDetails from './../ItemDetails';
import Record from './../Record';

import { withSwapiService } from './../HocHelpers';

const PersonDetails = ({ itemId, swapi }) => {
	const { getPerson, getImagePerson } = swapi;
	return(
		<ItemDetails itemId={itemId}
				 				 getData={getPerson}
				 				 getImageUrl={getImagePerson}>
			<Record field="gender" label="Gender" />
			<Record field="birthYear" label="Birth Year" />
			<Record field="eyeColor" label="Eye Color" />
		</ItemDetails>			
	);
};

export default withSwapiService(PersonDetails);