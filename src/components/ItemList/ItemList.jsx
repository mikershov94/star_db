import React from 'react';

import './ItemList.sass'

const ItemList = () => {
	return(
		<div className="mx-sm-4 item-list">
			<ul className="list-group">
				<li className="list-group-item person-item">Luke Skywalker (19BBY)</li>
				<li className="list-group-item person-item">C-3PO (112BBY)</li>
				<li className="list-group-item person-item">R2-D2 (33BBY)</li>
				<li className="list-group-item person-item">Darth Vader (41.9BBY)</li>
				<li className="list-group-item person-item">Leia Organa (19BBY)</li>
			</ul>
		</div>
	);
};

export default ItemList;