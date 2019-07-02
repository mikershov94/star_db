import React from 'react';

import Row from './../Row';
import { StarshipList, StarshipDetails } from './../SwComponents';

class StarshipPage extends React.Component {
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
			<Row left={<StarshipList onItemClick={this.onItemClick} />}
					 right={<StarshipDetails itemId={itemSelected} />} />
		);
	}

}

export default StarshipPage;