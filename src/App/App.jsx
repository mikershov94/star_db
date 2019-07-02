import React from 'react';

import './App.sass';

import Header from './../components/Header';
import RandomPlanet from './../components/RandomPlanet';
import { PeoplePage, PlanetPage, StarshipPage } from './../components/Pages';
import { SwapiProvider } from './../components/SwapiServiceContext';
import { SwapiService, MocService } from './../services';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			swapi: new SwapiService(),
		};

		this.onChangeService = () => {
			this.setState(({ swapi }) => {
				const Service = swapi instanceof SwapiService ? MocService : SwapiService;

				return {
					swapi: new Service(),
				};
			})
		};

	}

	render() {
		const RandomWidget = () => {
			return(
				<div className="d-flex justify-content-center">
					<RandomPlanet />
				</div>
			);
		};

		return(
			<SwapiProvider value={ this.state.swapi } >
				<div>
					<div className="container-fluid" >
						<Header onChangeService={this.onChangeService} />
					</div>
					<RandomWidget />	
					<PeoplePage />
					<PlanetPage />
					<StarshipPage />
				</div>
			</SwapiProvider>	
		);
	}
};

export default App;