import React from 'react';

import Row from './../Row';
import { PersonList, PersonDetails } from './../SwComponents';

class PeoplePage extends React.Component {
	constructor() {
		super();

		this.state = {
			itemSelected: 1,
		};

		this.onItemClick = (id) => {
			this.setState({
				itemSelected: id,
			})
		};

	}

	render() {
		const { itemSelected } = this.state;

		return(
			<Row left={<PersonList onItemClick={this.onItemClick} />}
					 right={<PersonDetails itemId={itemSelected} />} />
		);
	}

}

export default PeoplePage;