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
			<Header location={'single-product'} />
			<main className='product-container'>
				<div className='product'>
					<div className='product__image-container'>
						<img className='product__image' src={images[productId - 1]} />
					</div>
					<div className='product__title-container'>
						<h2 className='product__title'>{singleProduct.title}</h2>
					</div>
					<div className='product__price-container'>
						<h3 className='product__price-discount'>
							$
							{(singleProduct.price - (singleProduct.price * singleProduct.discountPercentage) / 100).toFixed(
								0
							)}
							<sup>
								.
								{((singleProduct.price - (singleProduct.price * singleProduct.discountPercentage) / 100) % 1)
									.toFixed(2)
									.substring(2)}
							</sup>
						</h3>
						<h3 className='product__price'>${singleProduct.price}</h3>
					</div>
					<div className='product__buttons-container'>
						<button className='product__buy-botton'>Buy</button>
						<button className='product__cart-botton'>Add to cart</button>
					</div>
				</div>
			</main>
		</>
	);
};

export default Product;
