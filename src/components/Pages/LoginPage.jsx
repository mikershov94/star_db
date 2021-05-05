import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {

	if (isLoggedIn) {
		return <Redirect to="/" />;
	};

	return(
		<div className="page-container">
			<div className="main-page">
				<p>Войдите для просмотра секретной страницы</p>
				<button className="btn btn-primary"
						onClick={onLogin}>
					Войти
				</button>
			</div>	
		</div>
	);

};

export default LoginPage;