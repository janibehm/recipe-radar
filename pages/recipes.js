import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../styles/index.module.css';
import axios from 'axios';

const Recipes = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/recipes');
        console.log('Recipes retrieved:', response.data);
      } catch (error) {
        console.error('Failed to get recipes:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Our recipes</h1>
      
      <Link href="/">Home</Link>
      <Link href="/addRecipe">Add your recipes here</Link>
      
    </div>
  );
};

export default Recipes;
