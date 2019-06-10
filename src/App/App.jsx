import React from 'react';

import './App.sass';

import Header from './../components/Header';
import RandomPlanet from './../components/RandomPlanet';
import ItemList from './../components/ItemList';
import PersonDetails from './../components/PersonDetails';

const App = () => {
	return(
		<div className="container-fluid" >
			<Header />
			<div className="box">
				<RandomPlanet />
				<div className="row body-app">
					<ItemList />
					<PersonDetails />
				</div>
			</div>
		</div>	
	);
};

export default App;