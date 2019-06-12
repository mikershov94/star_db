import React from 'react';

import './RandomPlanet.sass'

const RandomPlanet = () => {
	return(
		<div className="row mx-sm-4 slider">
			<div className="col-4">
				<img 
				src="https://vignette.wikia.nocookie.net/ru.starwars/images/c/c1/Kashyyyk_ArtTFU.png/revision/latest?cb=20180303151137"
				className="img-planet"
				alt="planet" />
			</div>
			<div className="col planet-props">
				<h3>Kashyyyk</h3>
				<ul className="list-group">
					<li className="list-group-item planet-prop-item">Population 450000000000</li>
					<li className="list-group-item planet-prop-item">Rotation Period 26</li>
					<li className="list-group-item planet-prop-item">Diameter 12765</li>
				</ul>
			</div>
		</div>
	);
};

export default RandomPlanet;