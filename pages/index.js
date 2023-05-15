import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../styles/index.module.css';
import axios from 'axios';

const Index = () => {
  return (
    <div className={styles.container}>
      <h1>Our recipes</h1>
      <Link href="/addRecipe">Add your recipes here</Link>
      <Link href="/recipes">Find recipes here</Link>
    </div>
  );
};

export default Index;

