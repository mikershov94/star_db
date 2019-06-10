import React from 'react';

const Header = () => {
	return(
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
		  <a className="navbar-brand" href="s#">Star DB</a>
		  <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

			<div className="navbar-collapse collapse" id="navbarColor03">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item active">
			       <a className="nav-link" href="s#">Persons </a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="s#">Planets</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="s#">Starships</a>
		      </li>
		    </ul>
		  </div>
		</nav>
	);
};

export default Header;