import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import styles from '../styles/index.module.css';
import axios from 'axios';
import { useState } from 'react';
import Card from '../components/Card';



const Recipes = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/recipes');
        setData(response.data)
        console.log('Recipes retrieved correctly:', response.data);
      } catch (error) {
        console.error('Failed to get recipies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
       <Navbar/>
       <div className={styles.container}>
      <h1>Our recipes</h1>
      <div className={styles.imageContainer}>
      
      <Card/>
      
      </div>
    </div>
    </div>
 
  );
};

export default Recipes;
