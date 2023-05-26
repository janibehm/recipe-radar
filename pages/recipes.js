import React, { useState } from 'react';  // Added useState import
import Navbar from '../components/Navbar';
import styles from '../styles/index.module.css';
import useFetchData from '../hooks/fetchData';
import Card from '../components/Card';

const Recipes = () => {
  const [search, setSearch] = useState("");  // Define the search state
  const { data, loading, error } = useFetchData('http://localhost:4000/recipes');

  const filteredData = data.filter(recipe =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>Our recipes</h1>
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className={styles.imageContainer}>
          {filteredData.map((recipe) => (
            <Card
              key={recipe.id}
              name={recipe.name}
              author={recipe.author}
              country={recipe.country}
              instructions={recipe.instructions}
              imageUrl={recipe.imageUrl}
              alt={recipe.name}
              ingredients={recipe.ingredients || []} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
