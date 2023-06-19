import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ id, image, price, title }) => {
	return (
		<>
			<Link className='card' to={`product/${id}`}>
				<div className='card__image-container'>
					<img className='card__image' src={image} />
				</div>
				<div className='card__price-container'>
					<h2 className='card__price'>${price}</h2>
				</div>
				<div className='card__title-container'>
					<h4 className='card__title'>{title}</h4>
				</div>
			</Link>
		</>
	);
};

export default Card;
