import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/styles/Product/Product.css';
import Header from '../../layouts/Header/Header';
import { ecommerceContext } from '../../contexts/EcommerceContext';

const Product = () => {
	const [singleProduct, setSingleProduct] = useState({ images: [] });
	const { productId } = useParams();

	const images = useContext(ecommerceContext);

	useEffect(() => {
		fetch(`https://dummyjson.com/products/${productId}`)
			.then(response => response.json())
			.then(product => setSingleProduct(product));
	}, []);

	return (
		<>
			<Header title={'Single product'} />
			<div className='product'>
				<div className='product__image-container'>
					<img className='product__image' src={images[productId]} />
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
