import React from 'react';
import SwapiService from './../../services/swapi-service';
import Spinner from './../Spinner';
import ErrorIndicator from './../ErrorIndicator';

import './ItemList.sass'

class ItemList extends React.Component {
	constructor() {
		super();

		this.swapi = new SwapiService();

		this.state = {
			persons: null,
			loading: true,
			errors: false,
		};

		this.onError = (err) => {
			this.setState({
				loading: false,
				errors: true,
			});
		}

		this.renderItems = (items) => {
			return items.map(({id, name}) => {
				let activeItem = "";
				if (this.props.itemSelected === id) {
					activeItem = " active";
				}

				return(
					<li className={`list-group-item list-group-item-action${activeItem} person-item`}
							key={id}
							onClick={() => this.props.onItemClick(id)}>
						{name}
					</li>
				);
			})
		};

	}

	componentDidMount() {
		this.swapi.getAllPeople()
			.then((persons) => {
				this.setState({
					persons: persons,
					loading: false,
					errors: false,
				});
			})
			.catch(this.onError);
	}

	render() {
		const { persons, loading, errors } = this.state;

		if (errors) {
			return (
				<div className="mx-sm-4 item-list d-flex justify-content-center">
					<ErrorIndicator />	
				</div>
			);
		};

		if (loading) {
			return(
				<div className="mx-sm-4 item-list d-flex justify-content-center">
					<Spinner />	
				</div>
			);
		};

		const items = this.renderItems(persons);

		return(
			<div className="mx-sm-4 item-list">
				{items}
			</div>
		);
	}

};

export default ItemList;