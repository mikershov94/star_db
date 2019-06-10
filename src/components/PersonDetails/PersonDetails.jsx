import React from 'react';

import './PersonDetails.sass';

const PersonDetails = () => {
	return(
		<div className="col-sm-6">
			<div className="row">
				<div className="col-sm-5">
					<img 
						src="https://vignette.wikia.nocookie.net/ru.starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20151106094927"
						alt="droid"
						height="150px"
						className="im-person"
					 />
				</div>
				<div className="col-sm-7">
				<h3>R2-D2</h3>
				<div>Gender man</div>
				<div>Birth Year 43</div>
				<div>Eye Color red</div>
			</div>
			</div>
		</div>
	);
};

export default PersonDetails;