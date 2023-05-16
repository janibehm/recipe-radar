import styles from '../styles/Card.module.css';

const Card = (props) => {
  
        return (
          <div className={styles.card}>
            <h2>{props.name}</h2>
            <p>{props.author}</p>
            <p>{props.country}</p>
            <p>{props.quantity}</p>
            <p>{props.ingredient}</p>
            <p>{props.instructions}</p>
          </div>
        );
    
}

export default Card;