class MocService {

	_people = [

		{
			id: 1,
			name: 'Bilbo Baggins [TEST DATA]',
			gender: 'male',
			birthYear: 'long ago',
			eyeColor: 'brown'
		},

		{
			id: 2,
			name: 'Frodo Baggins [TEST DATA]',
			gender: 'male',
			birthYear: 'long ago',
			eyeColor: 'dark brown'
		},

	];	

	_planets = [

		{
			id: 1,
			name: 'Earth [TEST DATA]',
			population: '7.530.000.000',
			rotationPeriod: '23 hours 56 seconds',
			diameter: '12.742 km',
		},

		{
			id: 2,
			name: 'Venus [TEST DATA]',
			population: 'not known',
			rotationPeriod: '243 days',
			diameter: '12.104 km',
		},

	];

	_starships = [

		{
			id: 1,
			name: 'USS Enterprise [TEST DATA]',
			model: 'NCC-1701-C',
			manufacturer: 'Northrop Grumman Shipbuilding',
			length: '300 meters',
			passengers: 50,
		},

	];

	getAllPeople = async () => {
		return this._people;	//для каждого полученного объекта применяем трансформацию
	}

	getPerson = async (id) => {
		return this._people[1];
	}

	getImagePerson = (item) => {
		return ('http://komotoz.ru/kartinki/images/kartinki_pro_lubov/kartinki_pro_lubov_17.jpg');
	}

	getAllPlanets = async () => {
		return this._planets;
	}

	getPlanet = async (id) => {
		return this._planets[0];
	}

	getImagePlanet = ({ id }) => {
		return 'http://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg'
	}

	getAllStarships = async () => {
		return this._starships;
	}

	getStarship = async (id) => {
		return this._starships[0];
	}

	getImageStarship = ({ id }) => {
		return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQUI-hIG19m9mvFCiqU4f6rgfr3zVUqL4w-C9bCjA5a6gCwb_lw'
	}

}

export default MocService;