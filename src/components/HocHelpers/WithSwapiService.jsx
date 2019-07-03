import React from 'react';
import { SwapiConsumer } from './../SwapiServiceContext';

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {
	return (props) => {
		return(
			<SwapiConsumer>
				{ 
					(swapi) => {
						const serviceProps = mapMethodsToProps(swapi);
						return (
							<Wrapped {...props} {...serviceProps} />
						);
					}
				}
			</SwapiConsumer>
		);
	};
};

export default withSwapiService;