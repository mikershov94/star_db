import React from 'react';

import './RandomPlanet.sass'

const RandomPlanet = () => {
	return(
		<div className="row slider">
			<div className="col-sm-5">
				<img 
				src="https://vignette.wikia.nocookie.net/ru.starwars/images/c/c1/Kashyyyk_ArtTFU.png/revision/latest?cb=20180303151137"
				className="img-planet"
				alt="planet" />
			</div>
			<div className="col-sm-7 planet-props">
				<h3>Kashyyyk</h3>
				<div>Population 450000000000</div>
				<div>Rotation Period 26</div>
				<div>Diameter 12765</div>
			</div>
		</div>
	);
};

export default RandomPlanet;