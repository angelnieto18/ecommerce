import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import bars from '../../assets/images/bars-solid.svg';
import { Link } from 'react-router-dom';
import '../../assets/styles/Header/Header.css';

const Header = ({ title, location }) => {
	return (
		<header className='header'>
			<Nav />
			<div className={`header__title-container ${location}`}>
				<h1>{title}</h1>
			</div>
		</header>
	);
};

const Nav = () => {
	const [toggle, setToggle] = useState('hidden');

	const toggleHandler = () => {
		if (toggle === 'hidden') {
			setToggle('showed');
		} else {
			setToggle('hidden');
		}
	};

	return (
		<nav className='navbar bg-slate-500'>
			<div className='navbar__assets-container'>
				<img className='navbar__image' src={logo} alt='Logo' />
				<img className='navbar__icon' src={bars} alt='toggle' onClick={toggleHandler} />
			</div>
			<ul className={`navbar__list ${toggle}`}>
				<li>
					<Link className='navbar__link' to={'/'}>
						Home
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
