import React from 'react';

import SwapiService from './../../services/swapi-service';

import './RandomPlanet.sass'

class RandomPlanet extends React.Component {
	constructor() {
		super();
		this.state = {
			name: null,
			population: null,
			rotationPeriod: null,
			diameter: null,
		};

		this.swapiService = new SwapiService();

		this.updatePlanet = () => {
			const id = Math.floor(Math.random()*25 + 2);

			this.swapiService
				.getPlanet(id)
				.then((planet) => {
					this.setState({
						id,
						name: planet.name,
						population: planet.population,
						rotationPeriod: planet.rotation_period,
						diameter: planet.diameter,
					});
				});
		};

		this.updatePlanet();
	}

	render() {
		const { id, name, population, rotationPeriod, diameter } = this.state;

		return(
			<div className="row mx-sm-4 slider">
				<div className="col-4">
					<img 
					src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
					className="img-planet"
					alt="planet" />
				</div>
				<div className="col planet-props">
					<h3>{name}</h3>
					<ul className="list-group">
						<li className="list-group-item planet-prop-item">Population {population}</li>
						<li className="list-group-item planet-prop-item">Rotation Period {rotationPeriod}</li>
						<li className="list-group-item planet-prop-item">Diameter {diameter}</li>
					</ul>
				</div>
			</div>
	);
	}

};

export default RandomPlanet;