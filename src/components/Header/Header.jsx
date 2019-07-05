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
			       <Link className="nav-link" to="/people/">Persons </Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to="/planets/">Planets</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to="/starships/">Starships</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to="/login">Login</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to="/secret">Secret</Link>
		      </li>
		    </ul>

		    <button className="btn btn-primary"
		    				onClick={onChangeService}>
		    	Change Service
		    </button>

		  </div>
		</nav>
	);
};

export default Header;