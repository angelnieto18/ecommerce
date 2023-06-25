import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Card/Card.css';

const Card = ({ id, image, price, discount, discountDecimals, title }) => {
	return (
		<>
			<Link className='card' to={`product/${id}`}>
				<div className='card__image-container'>
					<img className='card__image' src={image} />
				</div>
				<div className='card__price-container'>
					<h2 className='card__price'>
						${discount}
						<sup>.{discountDecimals}</sup>
					</h2>
					<div className='card__discount-container'>
						<p className='card__discount'>${price}</p>
					</div>
				</div>
				<div className='card__title-container'>
					<h4 className='card__title'>{title}</h4>
				</div>
			</Link>
		</>
	);
};

export default Card;
