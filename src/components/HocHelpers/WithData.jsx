import React from 'react';

import Spinner from './../Spinner';
import ErrorIndicator from './../ErrorIndicator';

const withData = (View, getData) => {
	return class extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				data: null,
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

		componentDidMount() {
			getData()
				.then((data) => {
					this.setState({
						data: data,
						loading: false,
						errors: false,
					});
				})
				.catch(this.onError);
		}

		render() {
			const { data, loading, errors } = this.state;

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

			return <View {...this.props} data={data} />;
		}
	};
};

export default withData;