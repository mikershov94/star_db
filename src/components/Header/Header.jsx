import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onChangeService }) => {
	return(
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
		  <Link className="navbar-brand" to="/">Star DB</Link>
		  <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

			<div className="navbar-collapse collapse" id="navbarColor03">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item active">
			       <Link className="nav-link" to="/people/">Персонажи </Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to="/planets/">Планеты</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to="/starships/">Корабли</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to="/login">Вход</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to="/secret">Секрет</Link>
		      </li>
		    </ul>

		    <button className="btn btn-primary"
		    				onClick={onChangeService}>
		    	Поменять сервис
		    </button>

		  </div>
		</nav>
	);
};

export default Header;