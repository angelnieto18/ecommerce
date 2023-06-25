import React from 'react';
import Header from './layouts/Header/Header';
import { Outlet } from 'react-router-dom';
import './assets/styles/App.css';

const App = () => {
	return (
		<>
			<Header title={'All products'} />
			<section className='products'>
				<Outlet />
			</section>
		</>
	);
};

export default App;
