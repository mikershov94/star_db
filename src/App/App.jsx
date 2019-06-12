import React from 'react';

import './App.sass';

import Header from './../components/Header';
import RandomPlanet from './../components/RandomPlanet';
import ItemList from './../components/ItemList';
import PersonDetails from './../components/PersonDetails';

const App = () => {
	return(
		<div>
			<div className="container-fluid" >
				<Header />
			</div>
			<div className="d-flex justify-content-center">
				<RandomPlanet />
			</div>
			<div className="container-fluid body-app d-flex justify-content-between">
				<ItemList />
				<PersonDetails />
			</div>
		</div>	
	);
};

export default App;