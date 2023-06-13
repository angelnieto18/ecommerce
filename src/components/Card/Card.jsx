import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ id, image, title }) => {
  return (
    <>
      <Link className='card' to={`product/${id}`}>
        <div className='card__image-container'>
          <img className='card__image' src={image} />
        </div>
        <div className='card__title-container'>
          <h2 className='card__title'>{title}</h2>
        </div>
      </Link>
    </>
  );
};

export default Card;
