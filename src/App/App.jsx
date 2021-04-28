import React from 'react';

import './App.sass';

import Header from './../components/Header';
import RandomPlanet from './../components/RandomPlanet';
import { PeoplePage, PlanetPage, StarshipPage, SecretPage, LoginPage } from './../components/Pages';
import { SwapiProvider } from './../components/SwapiServiceContext';
import { SwapiService, MocService } from './../services';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			swapi: new SwapiService(),
			isLoggedIn: false
		};

		this.onLogin = () => {
			this.setState({
				isLoggedIn: true,
			});
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
				<Router >
					<div>
						<div className="container-fluid" >
							<Header onChangeService={this.onChangeService} />
						</div>
						<RandomWidget />	
						
						<Route path="/" exact render={() => 
							<div>
								<h1>Добро пожаловать в приложение StarDB</h1>
								<PeoplePage />
							</div>
						}/>
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