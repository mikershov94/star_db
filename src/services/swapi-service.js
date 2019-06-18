class SwapiService {
	constructor() {
		this._apiBase = 'https://swapi.co/api';
	}

	async getReource(url) {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}`+
				` received ${res.status}`);
		}

		return await res.json();
	}

	_extractId(item) {											//получаем ID сущности
		const idRegExp = /\/([0-9]*)\/$/;	//регулярным выражением достаем из URL

		return item.url.match(idRegExp)[1]; //возвращаем id из URL, который хранится в props
	}

	_transformPlanet = (planet) => {	//принимаем объект planet и возвращаем объект с его состояниями
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
			birthYear: person.birthYear,
			eyeColor: person.eyeColor,
		};
	}

	async getAllPeople() {
		const res = await this.getReource('/people/');	//асинхронно обращаемся к API
		return res.results.map(this._transformPerson);	//для каждого полученного объекта применяем трансформацию
	}

	async getPerson(id) {
		const person = await this.getReource(`/people/${id}`);	//асинхронно обращаемся к API

		return this._transformPerson(person);		//возвращаем полученный объект трансформированным
	}

	async getAllPlanets() {
		const res = await this.getReource('/planets/');	//асинхронно обращаемся к API
		return res.results.map(this._transformPlanet);	//для каждого полученного объекта применяем трансформацию
	}

	async getPlanet(id) {
		const planet = await this.getReource(`/planets/${id}`);	//асинхронно обращаемся к API

		return this._transformPlanet(planet);	//возвращаем полученный объект трансформированным
	}

	async getAllStarships() {
		const res = await this.getReource('/starships/');	//асинхронно обращаемся к API
		return res.results.map(this._transformStarship);	//для каждого полученного объекта применяем трансформацию
	}

	async getStarship(id) {
		const starship = await this.getReource(`/starships/${id}`);	//асинхронно обращаемся к API

		return this._transformStarship(starship)	//возвращаем полученный объект трансформированным
	}

}

export default SwapiService;