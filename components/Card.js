import React from 'react';
import styles from '../styles/card.module.css';
import Image from 'next/image';

const Card = ({ name, author, country, instructions, imageUrl, alt, ingredients }) => {
  return (
    <div className={styles.card}>
      <Image src={imageUrl} alt={alt} height={300} width={300}/>
      <div className={styles.cardContent}>
        <h2>{name}</h2>
        <p>Author: {author}</p>
        <p>Country: {country}</p>
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{`${ingredient.quantity} ${ingredient.ingredient}`}</li>
          ))}
        </ul>
        <p>Instructions: {instructions}</p>
      </div>
    </div>
  );
};


export default Card;

