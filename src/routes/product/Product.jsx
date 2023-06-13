import React, { useState, useEffect } from 'react';
import { getProducts } from '../../App';
import { useParams } from 'react-router-dom';

const Product = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    getProducts(`https://dummyjson.com/products/${productId}`).then((product) => {
      setProduct(product);
    });
  }, []);

  return (
    <>
      <div className='product'>
        <div className='product__image-container'>
          <img
            className='product__image'
            src={product.images === undefined ? product.thumbnail : product.images[0]}
          />
        </div>
        <div className='product__price-container'>
          <h1 className='product__price'>${product.price}</h1>
        </div>
        <div className='product__title-container'>
          <h2 className='product__title'>{product.title}</h2>
        </div>
        <div className='product__description-container'>
          <p className='product__description'>{product.description}</p>
        </div>
        <div className='product__brand-container'>
          <h2 className='product__brand'>{product.brand}</h2>
        </div>
      </div>
    </>
  );
};

export default Product;
