import React from 'react';

import './App.sass';

import Header from './../components/Header';
import RandomPlanet from './../components/RandomPlanet';
import ErrorIndicator from './../components/ErrorIndicator';
import ErrorButton from './../components/ErrorButton';
import PersonPage from './../components/PersonPage';
import ItemList from './../components/ItemList';
import PersonDetails from './../components/PersonDetails';

import SwapiService from './../services/swapi-service';

class App extends React.Component {
	constructor() {
		super();

		this.swapi = new SwapiService();

		this.state = {
			itemSelected: 5,
			visibleRandomPlanet: true,
			hasErrors: false,
		}

		this.onToggleButton = () => {
			this.setState({
				visibleRandomPlanet: !this.state.visibleRandomPlanet,
			})
		};

		this.onItemClick = (id) => {
			this.setState({
				itemSelected: id,
			})
		};
	}

	componentDidCatch() {
		console.log('error');
		this.setState({
			hasErrors: true,
		})
	}

	render() {
		if (this.state.hasErrors) {
			return <ErrorIndicator />;
		}

		const RandomWidget = () => {
			return(
				<div className="d-flex justify-content-center">
					<RandomPlanet />
				</div>
			);
		};

		const widget = this.state.visibleRandomPlanet ? <RandomWidget /> : null;


		return(
			<div>
				<div className="container-fluid" >
					<Header />
				</div>
				{widget}
				<div className="container d-flex">
					<button className="btn btn-warning btns-app"
									onClick={this.onToggleButton}>
						Toggle Random Planet
					</button>
					<ErrorButton />
				</div>
				<PersonPage onItemClick={this.onItemClick}
										itemSelected={this.state.itemSelected}
										swapi={this.swapi} />

				<div className="container-fluid body-app d-flex justify-content-between">
					<ItemList onItemClick={this.props.onItemClick}
										itemSelected={this.props.itemSelected}
										getData={this.swapi.getAllPlanets}
										renderItem={(item) => item.name} /> 
					<PersonDetails personId={this.state.itemSelected} />
				</div>

				<div className="container-fluid body-app d-flex justify-content-between">
					<ItemList onItemClick={this.props.onItemClick}
										itemSelected={this.props.itemSelected}
										getData={this.swapi.getAllStarships} /> 
					<PersonDetails personId={this.state.itemSelected} />
				</div>



			</div>	
		);
	}
};

export default App;