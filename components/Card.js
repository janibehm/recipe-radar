import React from 'react';
import styles from '../styles/card.module.css';
import Image from 'next/image';
const Card = (props) => {
  return (
    <div className={styles.card}>
      <h2>{props.name}</h2>
      <p>{props.author}</p>
      <p>{props.country}</p>
      <p>{props.quantity}</p>
      <p>{props.ingredient}</p>
      <p>{props.instructions}</p>
      <div className={styles.imageContainer}>
      <Image src={props.imageUrl} alt={props.name} width={300} height={300} />
       </div>
    </div>
  );
};

export default Card;

