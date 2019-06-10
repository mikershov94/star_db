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

	async getAllPeople() {
		const res = await this.getReource('/people/');
		return res.results
	}

	getPerson(id) {
		return this.getReource(`/people/${id}`);
	}

	async getAllPlanets() {
		const res = await this.getReource('/planets/');
		return res.results
	}

	getPlanet(id) {
		return this.getReource(`/planets/${id}`);
	}

	async getAllStarships() {
		const res = await this.getReource('/starships/');
		return res.results
	}

	getStarship(id) {
		return this.getReource(`/starships/${id}`);
	}

}

export default SwapiService;