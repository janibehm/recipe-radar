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
    <div className={`${styles.cardContainer} ${expanded ? styles.fullscreen : ''}`}>
      <div className={styles.card}>
        <div onClick={toggleExpanded}>
          <div className={styles.cardHeader}>
            <div className={styles.cardImage}>
              <Image src={imageUrl} alt={alt} width={expanded ? 200 : 50} height={expanded ? 200 : 50} />
            </div>
            <h2>{name}</h2>
          </div>
          {expanded && (
            <div className={styles.cardContent}>
              <div className={styles.leftContent}>
                <h3>Ingredients</h3>
                <table className={styles.table}>
                  <tbody>
                    {ingredients.map((ingredient, index) => (
                      <tr key={index}>
                        <td className={styles.td}>{ingredient.quantity}</td>
                        <td className={styles.td}>{ingredient.ingredient}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.rightContent}>
                <p>Author: {author}</p>
                <p>Country: {country}</p>
                <p>Instructions: {instructions}</p>
              </div>
            </div>
          )}
        </div>
        <button onClick={toggleExpanded}>{expanded ? 'See less' : 'See more'}</button>
      </div>
    </div>
  );
};

export default Card;
