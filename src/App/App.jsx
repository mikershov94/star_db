import React from 'react';

import './App.sass';

import Header from './../components/Header';
import RandomPlanet from './../components/RandomPlanet';
import ItemList from './../components/ItemList';
import PersonDetails from './../components/PersonDetails';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			itemSelected: null,
		}

		this.onItemClick = (id) => {
			this.setState({
				itemSelected: id,
			})
		};
	}

	render() {
		return(
			<div>
				<div className="container-fluid" >
					<Header />
				</div>
				<div className="d-flex justify-content-center">
					<RandomPlanet />
				</div>
				<div className="container-fluid body-app d-flex justify-content-between">
					<ItemList onItemClick={this.onItemClick}
										itemSelected={this.state.itemSelected} /> 
					<PersonDetails />
				</div>
			</div>	
		);
	}
};

export default App;