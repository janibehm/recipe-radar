import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../styles/index.module.css';
import axios from 'axios';

const Index = () => {
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
      <h1>Home Page</h1>
      <Link href="/recipes">Go to Recipe Page</Link>
    </div>
  );
};

export default Index;

