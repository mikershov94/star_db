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
									itemSelected={this.props.itemSelected} /> 
				<PersonDetails personId={this.props.itemSelected} />
			</div>
		);
	}

}

export default PersonPage;