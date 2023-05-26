import React from 'react';
import styles from '../styles/card.module.css';
import Image from 'next/image';
import { useState } from 'react';

const Card = ({ name, author, country, instructions, imageUrl, alt, ingredients }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`${styles.cardContainer} ${expanded ? styles.fullscreen : ''}`}
      onClick={toggleExpanded}
    >
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardImage}>
            <Image src={imageUrl} alt={alt} width={50} height={50} />
          </div>
          <h2>{name}</h2>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            toggleExpanded();
          }}
        >
          {expanded ? 'See less' : 'See more'}
        </button>

        {expanded && 
          <div>
            <p>Author: {author}</p>
            <p>Country: {country}</p>
            <p>Instructions: {instructions}</p>
            <div>
              <h3>Ingredients:</h3>
              {ingredients.map((ingredient, index) => (
                <p key={index}>{ingredient.quantity} of {ingredient.ingredient}</p>
              ))}
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Card;
