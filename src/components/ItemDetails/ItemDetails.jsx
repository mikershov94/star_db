import React from 'react';
import SwapiService from './../../services/swapi-service';
import Spinner from './../Spinner';
import ErrorIndicator from './../ErrorIndicator';
import ErrorButton from './../ErrorButton';

import './ItemDetails.sass';

class ItemDetails extends React.Component {
	constructor() {
		super();

		this.swapi = new SwapiService();

		this.state = {
			item: null,
			image: null,
			loading: true,
			errors: false,
		}

		this.onError = (err) => {
			this.setState({
				loading: false,
				errors: true,
			})
		};

		this.updateItem = () => {
			const { itemId, getData, getImageUrl } = this.props;

			getData(itemId)
				.then((item) => {
					this.setState({
						item: item,
						image: getImageUrl(item),
						loading: false,
						errors: false,
					});
				})
				.catch(this.onError);
		};
	}

	componentDidCatch() {
		this.setState({
			errors: true,
		});
	}

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if ((this.props.itemId !== prevProps.itemId) ||
					(this.props.getData !== prevProps.getData) ||
						(this.props.getImageUrl !== prevProps.getImageUrl)) {
			this.setState({
				loading: true,
			})
			this.updateItem();
		}
	}

	render() {
		const { item, loading, errors, image } = this.state;

		if (item === null) {
			return(
				<span>Select item</span>
			);
		}

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
				<div className="row d-flex">
					<div>
						<img 
							src={image}
							alt="avatar"
							height="150px"
							className="im-person"
						 />
					</div>
					<div className="col person-data">
					<h3>{item.name}</h3>
					<ul className="list-group">
						{
							React.Children.map(this.props.children, (child, index) => {
								return React.cloneElement(child, { item });	//создать копию элемента, добавив в копию свойство (props) item
							})
						}
					</ul>
					<ErrorButton />
				</div>
				</div>
			</div>
		);
	}
	
};

export default ItemDetails;