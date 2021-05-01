import React from 'react';

import './App.sass';

import Header from './../components/Header';
import RandomPlanet from './../components/RandomPlanet';
import { PeoplePage, PlanetPage, StarshipPage, SecretPage, LoginPage, MainPage } from './../components/Pages';
import { SwapiProvider } from './../components/SwapiServiceContext';
import { SwapiService, MocService } from './../services';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			swapi: new SwapiService(),
			isLoggedIn: false,
			isTestedData: false
		};

		this.onLogin = () => {
			this.setState({
				isLoggedIn: true,
			});
		};

		this.onChangeService = () => {
			this.setState(({ swapi }) => {
				const Service = swapi instanceof SwapiService ? MocService : SwapiService;
				const isRandomWidgetView = this.state.isTestedData

				return {
					swapi: new Service(),
					isTestedData: !isRandomWidgetView
				};
			})
		};

	}

	render() {
		const RandomWidget = () => { 
			if (this.state.isTestedData) {
				return null;
			}

			return(
				<div className="d-flex justify-content-center">
					<RandomPlanet />
				</div>
			);
		};

		return(
			<SwapiProvider value={ this.state.swapi } >
				<Router >
					<div>
						<div className="container-fluid" >
							<Header onChangeService={this.onChangeService} />
						</div>
						<RandomWidget />	
						
						<Route path="/" exact component={MainPage} />
						<Route path="/people/:id?" component={PeoplePage} />
						<Route path="/planets/" component={PlanetPage} />
						<Route path="/starships/" exact component={StarshipPage} />
						<Route path="/starships/:id" component={StarshipPage} />
						<Route path="/login"
									 render={ () => 
									 	<LoginPage isLoggedIn={this.state.isLoggedIn}
									 						 onLogin={ this.onLogin } />
									  } />

						<Route path="/secret"
									 render={ () => 
									 	<SecretPage isLoggedIn={this.state.isLoggedIn} />
									  } />

					</div>
				</Router>
			</SwapiProvider>	
		);
	}
};

export default App;