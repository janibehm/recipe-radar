import React from 'react';
import Link from 'next/link';  // Import the Link component
import Navbar from '../components/Navbar';
import styles from '../styles/index.module.css';

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.heroBanner}>
       
        <video autoPlay loop muted className={styles.heroVideo}>
         <source src="/videos/food.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
        </div>
        <h1>Looking for a recipes?</h1>

        <div className={styles.cardContainer}>
          <Link href="/recipes">
            <div className={styles.card}>Browse recipes</div>
          </Link>
          <Link href="/addRecipe">
            <div className={styles.card}>Add recipes</div>
          </Link>
          <a href="https://www.bc.fi" target="_blank" rel="noopener noreferrer">
          <div className={styles.card}>Want to know more about our projects?</div>
        </a>
          
        </div>
      </div>
    </div>
  );
};

export default Index;
