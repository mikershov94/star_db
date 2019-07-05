import React from 'react';

import Row from './../Row';
import { withRouter } from 'react-router-dom';
import { PersonList, PersonDetails } from './../SwComponents';

const PeoplePage = ({ history, match }) => {
	const { id } = match.params;

	return(
		<Row left={<PersonList onItemClick={ (id) => { history.push(id) } } />}
				 right={<PersonDetails itemId={id} />} />
	);
}

export default withRouter(PeoplePage);