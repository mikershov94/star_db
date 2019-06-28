import React from 'react';

import './App.sass';

import Header from './../components/Header';
import RandomPlanet from './../components/RandomPlanet';
import ErrorIndicator from './../components/ErrorIndicator';
import ErrorButton from './../components/ErrorButton';
//import PersonPage from './../components/PersonPage';
import Row from './../components/Row';
import ItemList from './../components/ItemList';
import ItemDetails from './../components/ItemDetails';

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

	renderItem(item) {
			return item.name;
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

		const itemList = (
				<ItemList onItemClick={this.props.onItemClick}
										itemSelected={this.props.itemSelected}
										getData={this.swapi.getAllPlanets} />
		);

		const itemDetails = (
				<ItemDetails personId={this.state.itemSelected} />
		);


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
			{/*<PersonPage onItemClick={this.onItemClick}
										itemSelected={this.state.itemSelected}
										swapi={this.swapi} />			*/}																																																																																																				

				<Row left={itemList} right={itemDetails} />

			</div>	
		);
	}
};

export default App;