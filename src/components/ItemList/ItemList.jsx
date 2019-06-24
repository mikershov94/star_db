import React from 'react';
import Spinner from './../Spinner';
import ErrorIndicator from './../ErrorIndicator';

import './ItemList.sass'

class ItemList extends React.Component {
	constructor() {
		super();

		this.state = {
			items: null,
			loading: true,
			errors: false,
		};

		this.onError = (err) => {
			this.setState({
				loading: false,
				errors: true,
			});
		};

	}

	renderItems(items) {
			return items.map((item) => {
				const { id } = item;
				const label = this.props.renderItem(item)

				let activeItem = "";
				if (this.props.itemSelected === id) {
					activeItem = " active";
				}


				return(
					<li className={`list-group-item list-group-item-action${activeItem} person-item`}
							key={id}
							onClick={() => this.props.onItemClick(id)}>
						{label}
					</li>
				);
			})
	};

	componentDidMount() {
		const { getData } = this.props;

		getData()
			.then((items) => {
				this.setState({
					items: items,
					loading: false,
					errors: false,
				});
			})
			.catch(this.onError);
	}

	render() {
		const { items, loading, errors } = this.state;

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

		const list = this.renderItems(items);

		return(
			<div className="mx-sm-4 item-list">
				{list}
			</div>
		);
	}

};

export default ItemList;