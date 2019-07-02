import React from 'react';
import { SwapiConsumer } from './../SwapiServiceContext';

const withSwapiService = (Wrapped, mapMethodsToProps) => {
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