import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Product = () => {
	const [singleProduct, setSingleProduct] = useState({ images: [] });
	const { productId } = useParams();

	useEffect(() => {
		fetch(`https://dummyjson.com/products/${productId}`)
			.then(response => response.json())
			.then(product => setSingleProduct(product));
	}, []);

	return (
		<>
			<Link to={'/'}>Back</Link>
			<div className='product'>
				<div className='product__image-container'>
					<img src={singleProduct.images[0]} />
				</div>
				<div className='product__price-container'>
					<h2 className='product__price'>${singleProduct.price}</h2>
				</div>
				<div className='product__title-container'>
					<h3 className='product__title'>{singleProduct.title}</h3>
				</div>
			</div>
		</>
	);
};

export default Product;
