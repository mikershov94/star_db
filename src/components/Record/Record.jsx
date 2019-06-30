import React from 'react';

import "./Record.sass";

const Record = ({ item, field, label }) => {
	return(
		<li className="list-group-item person-prop-item">
				<span className="term">{label}</span>
				<span>{ item[field] }</span>
		</li>
	);
};

export default Record;