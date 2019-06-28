import React from 'react';

const Row = ({left, right}) => {
	return(
		<div className="container-fluid body-app d-flex justify-content-between">
			{left}
			{right}
		</div>
	);
}

export default Row;