import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, image, price, discount, discountDecimals, title }) => {
	return (
		<>
			<Link
				className='card bg-slate-100 text-slate-950 p-4 rounded-2xl text-xs w-full no-underline'
				to={`product/${id}`}
			>
				<div className='card__image-container'>
					<img className='w-full' src={image} />
				</div>
				<div className='flex justify-between items-center'>
					<h2 className='card__price'>
						${discount}
						<sup>.{discountDecimals}</sup>
					</h2>
					<div className='card__discount-container'>
						<p className='text-slate-400 line-through'>${price}</p>
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
