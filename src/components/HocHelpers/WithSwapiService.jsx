import React from 'react';
import { SwapiConsumer } from './../SwapiServiceContext';

const withSwapiService = (Wrapped) => {
	return (props) => {
		return(
			<SwapiConsumer>
				{ 
					(swapi) => {
						return (
							<Wrapped {...props} swapi={swapi} />
						);
					}
				}
			</SwapiConsumer>
		);
	};
};

export default withSwapiService;