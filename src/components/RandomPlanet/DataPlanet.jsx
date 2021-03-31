import React from 'react';

const DataPlanet = (props) => {
	const { id, name, population, rotationPeriod, diameter } = props.planet;

	return(
		<React.Fragment>
			<div className="col-4">
					<img 
					src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
					className="img-planet"
					alt="planet" />
				</div>
				<div className="col planet-props">
					<h3>{name}</h3>
					<ul className="list-group">
						<li className="list-group-item planet-prop-item">Население:	{population}</li>
						<li className="list-group-item planet-prop-item">Период вращения: {rotationPeriod}</li>
						<li className="list-group-item planet-prop-item">Диаметр: {diameter}</li>
					</ul>
				</div>
		</React.Fragment>
	);
};

export default DataPlanet;