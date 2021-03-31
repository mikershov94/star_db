import React from 'react';

import Row from './../Row';
import { PlanetList, PlanetDetails } from './../SwComponents';

class PlanetPage extends React.Component {
	constructor() {
		super();

		this.state = {
			itemSelected: 11,
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
			<Row left={<PlanetList onItemClick={this.onItemClick} />}
				 right={<PlanetDetails itemId={itemSelected} />} />
		);
	}

}

export default PlanetPage;