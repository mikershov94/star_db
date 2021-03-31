import React from 'react';

import Row from './../Row';
import { StarshipList, StarshipDetails } from './../SwComponents';
import { withRouter } from 'react-router-dom';


const StarshipPage = ({ history, match }) => {
	const { id } = match.params;

	return(
		<Row left={<StarshipList onItemClick={ (id) => { history.push(id) } }/> }
			 right={<StarshipDetails itemId={id} /> } />

	);
}

export default withRouter(StarshipPage);