import React from 'react';
import SwapiService from './../../services/swapi-service';
import Spinner from './../Spinner';
import ErrorIndicator from './../ErrorIndicator';
import ErrorButton from './../ErrorButton';

import './ItemDetails.sass';

class PersonDetails extends React.Component {
	constructor() {
		super();

		this.swapi = new SwapiService();

		this.state = {
			person: null,
			loading: true,
			errors: false,
		}

		this.onError = (err) => {
			this.setState({
				loading: false,
				errors: true,
			})
		};

		this.updatePerson = () => {
			const { personId } = this.props;

			this.swapi.getPerson(personId)
				.then((person) => {
					this.setState({
						person: person,
						loading: false,
						errors: false,
					});
				})
				.catch(this.onError);
		};
	}

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId) {
			this.setState({
				loading: true,
			})
			this.updatePerson();
		}
	}

	render() {
		const { person, loading, errors } = this.state;

		if (errors) {
			return(
				<div className="mr-4 person-details d-flex justify-content-center">
					<ErrorIndicator />
				</div>
			);
		}

		if (loading) {
			return(
				<div className="mr-4 person-details d-flex justify-content-center">
					<Spinner />
				</div>
			);
		}

		return(
			<div className="mr-4 person-details">
				<div className="row">
					<div className="col-5">
						<img 
							src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
							alt="droid"
							height="150px"
							className="im-person"
						 />
					</div>
					<div className="col person-data">
					<h3>{person.name}</h3>
					<ul className="list-group">
						<li className="list-group-item person-prop-item">Gender {person.gender}</li>
						<li className="list-group-item person-prop-item">Birth Year {person.birthYear}</li>
						<li className="list-group-item person-prop-item">Eye Color {person.eyeColor}</li>
					</ul>
					<ErrorButton />
				</div>
				</div>
			</div>
		);
	}
	
};

export default PersonDetails;