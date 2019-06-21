import React from 'react';

import SwapiService from './../../services/swapi-service';
import DataPlanet from './DataPlanet';
import Spinner from './../Spinner';
import ErrorIndicator from './../ErrorIndicator';

import './RandomPlanet.sass'

class RandomPlanet extends React.Component {
	constructor() {
		super();
		this.state = {
			planet: {},
			loading: true,
			error: false,
		};

		this.swapiService = new SwapiService();

		this.onPlanetLoaded = (planet) => {
			this.setState({ 
						planet,
						loading: false,
						error: false,
					});
		};

		this.onError = (error) => {
			this.setState({
				loading: false,
				error: true,
			})
		};

		this.updatePlanet = () => {
			const id = Math.floor(Math.random()*25 + 3);

			this.swapiService
				.getPlanet(id)
				.then(this.onPlanetLoaded)
				.catch(this.onError);
		};

		this.updatePlanet();
	}

	componentDidMount() {
		setInterval(this.updatePlanet, 10000);
	}

	render() {

		const { planet, loading, error } = this.state;

		const hasData = !( loading || error );

		const errorMessage = error ? <ErrorIndicator /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = hasData ? <DataPlanet planet={planet} /> : null;

		return(
			<div className="row mx-sm-4 slider d-flex justify-content-center">
				{errorMessage}
				{spinner}
				{content}
			</div>
	);
	}

};

export default RandomPlanet;