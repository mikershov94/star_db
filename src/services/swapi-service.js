class SwapiService {
	constructor() {
		this._apiBase = 'https://swapi.dev/api';
		this._imageBase = 'https://starwars-visualguide.com/assets/img/'
	}

	async getReource(url) {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}`+
				` received ${res.status}`);
		}

		return await res.json();
	}

	_extractId(item) {						//получаем ID сущности
		const idRegExp = /\/([0-9]*)\/$/;	//регулярным выражением достаем из URL

		return item.url.match(idRegExp)[1]; //возвращаем id из URL, который хранится в props
	}

	_transformPlanet = (planet) => {		//принимаем объект planet и возвращаем объект с его состояниями
		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter,
		};
	}

	_transformStarship = (starship) => {	//принимаем объект starship и возвращаем объект с его состояниями
		return {
			id: this._extractId(starship),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.costInCredits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargoCapacity,
		};
	}

	_transformPerson = (person) => {	//принимаем объект person и возвращаем объект с его состояниями
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color,
		};
	}

	getAllPeople = async () => {
		const res = await this.getReource('/people/');	//асинхронно обращаемся к API
		return res.results.map(this._transformPerson);	//для каждого полученного объекта применяем трансформацию
	}

	getPerson = async (id) => {
		const person = await this.getReource(`/people/${id}`);	//асинхронно обращаемся к API

		return this._transformPerson(person);		//возвращаем полученный объект трансформированным
	}

	getImagePerson = ({ id }) => {
		return `${this._imageBase}characters/${id}.jpg`
	}

	getAllPlanets = async () => {
		const res = await this.getReource('/planets/');	//асинхронно обращаемся к API
		return res.results.map(this._transformPlanet);	//для каждого полученного объекта применяем трансформацию
	}

	getPlanet = async (id) => {
		const planet = await this.getReource(`/planets/${id}`);	//асинхронно обращаемся к API

		return this._transformPlanet(planet);	//возвращаем полученный объект трансформированным
	}

	getImagePlanet = ({ id }) => {
		return `${this._imageBase}planets/${id}.jpg`
	}

	getAllStarships = async () => {
		const res = await this.getReource('/starships/');	//асинхронно обращаемся к API
		return res.results.map(this._transformStarship);	//для каждого полученного объекта применяем трансформацию
	}

	getStarship = async (id) => {
		const starship = await this.getReource(`/starships/${id}`);	//асинхронно обращаемся к API

		return this._transformStarship(starship)	//возвращаем полученный объект трансформированным
	}

	getImageStarship = ({ id }) => {
		return `${this._imageBase}starships/${id}.jpg`
	}

}

export default SwapiService;