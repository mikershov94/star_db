import React from 'react';

import './ItemList.sass'

const ItemList = (props) => {
	
	const { data, onItemClick, children: renderName } = props;

	const items = data.map((item) => {
		const { id } = item;
		const label = renderName(item);

		let activeItem = "";
		if (props.itemSelected === id) {
			activeItem = " active";
		}


		return(
			<li className={`list-group-item list-group-item-action${activeItem} person-item`}
					key={id}
					onClick={() => onItemClick(id)}>
				{label}
			</li>
		);
	});

	return(
		<div className="mx-sm-4 item-list">
			{items}
		</div>
	);

};

export default ItemList;