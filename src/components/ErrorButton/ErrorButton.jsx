import React from 'react';

import './ErrorButton.sass';

class ErrorButton extends React.Component {
	constructor() {
		super();
		this.state = {
			dataError: false,
		};

		this.throwError = () => {
			this.setState({
				dataError: true,
			})
		};
	}

	render() {
		if (this.state.dataError) {
			this.foo.bar = 0;
		};

		return(
			<button className="btn btn-danger btns-app"
							onClick={this.throwError} >
						Throw Error
			</button>
		);
	}

}

export default ErrorButton;