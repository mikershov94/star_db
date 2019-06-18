import React from 'react';
import SwapiService from './../../services/swapi-service';
import Spinner from './../Spinner';

import './ItemList.sass'

class ItemList extends React.Component {
	constructor() {
		super();

		this.swapi = new SwapiService();

		this.state = {
			persons: null,
		};

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
				});
			});
	}

	render() {
		const { persons } = this.state;

		if (!persons) {
			return <Spinner />
		}

		const items = this.renderItems(persons);

		return(
			<div className="mx-sm-4 item-list">
				<ul className="list-group">
					{items}
				</ul>
			</div>
		);
	}

};

export default ItemList;