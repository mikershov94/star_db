import React from 'react';

import ItemList from './../ItemList';
import PersonDetails from './../PersonDetails';
import ErrorIndicator from './../ErrorIndicator';

import './PersonPage.sass';

class PersonPage extends React.Component {
	constructor() {
		super();
		this.state = {
			hasErrors: false,
		};

		this.renderItem = (item) => {
			return `${item.name} (${item.birthYear})`;
		};

	}

	componentDidCatch() {
		this.setState({
			hasErrors: true,
		});
	}

	render() {

		if (this.state.hasErrors) {
			return <ErrorIndicator />;
		}

		return(
			<div className="container-fluid body-app d-flex justify-content-between">
				<ItemList onItemClick={this.props.onItemClick}
									itemSelected={this.props.itemSelected}
									getData={this.props.swapi.getAllPeople}
									renderItem={this.renderItem} /> 
				<PersonDetails personId={this.props.itemSelected} />
			</div>
		);
	}

}

export default PersonPage;