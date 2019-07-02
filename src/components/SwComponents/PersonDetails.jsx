import React from 'react';

import ItemDetails from './../ItemDetails';
import Record from './../Record';

import { withSwapiService } from './../HocHelpers';

const PersonDetails = (props) => {
	return(
		<ItemDetails {...props} >
			<Record field="gender" label="Gender" />
			<Record field="birthYear" label="Birth Year" />
			<Record field="eyeColor" label="Eye Color" />
		</ItemDetails>			
	);
};

const mapMethodsToProps = (swapi) => {
	return {
		getData: swapi.getPerson,
		getImageUrl: swapi.getImagePerson,
	};
};

export default withSwapiService(PersonDetails, mapMethodsToProps);