import React from 'react';

import './ErrorIndicator.sass';

const ErrorIndicator = () => {
	return(
		<div className="error-indicator">
			<span className="boom">БАХ!</span>
			<span>
				что-то пошло не так...
			</span>
			<span>
				но мы уже выслали дроидов чтобы все исправить
			</span>
		</div>
	);
};

export default ErrorIndicator;