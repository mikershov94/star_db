import React from 'react';

import './PersonDetails.sass';

const PersonDetails = () => {
	return(
		<div className="mr-4 person-details">
			<div className="row">
				<div className="col-5">
					<img 
						src="https://vignette.wikia.nocookie.net/ru.starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20151106094927"
						alt="droid"
						height="150px"
						className="im-person"
					 />
				</div>
				<div className="col person-data">
				<h3>R2-D2</h3>
				<ul className="list-group">
					<li className="list-group-item person-prop-item">Gender man</li>
					<li className="list-group-item person-prop-item">Birth Year 43</li>
					<li className="list-group-item person-prop-item">Eye Color red</li>
				</ul>
			</div>
			</div>
		</div>
	);
};

export default PersonDetails;