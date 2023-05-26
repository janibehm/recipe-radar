import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/index.module.css';
import useFetchData from '../hooks/fetchData';
import Card from '../components/Card';

const Recipes = () => {
  const { data, loading, error } = useFetchData('http://localhost:4000/recipes');
  console.log('Recipes retrieved:', data);

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
        <div className={styles.imageContainer}>
          {data.map((recipe) => (
            <Card
              key={recipe.id}
              name={recipe.name}
              author={recipe.author}
              country={recipe.country}
              instructions={recipe.instructions}
              imageUrl={recipe.imageUrl}
              alt={recipe.name}
            >
              {recipe.ingredients && recipe.ingredients.length > 0 && (
                <div>
                  <h3>Ingredients:</h3>
                  {recipe.ingredients.map((ingredient, index) => (
                    <div key={index}>
                      <p>{ingredient.quantity}</p>
                      <p>{ingredient.ingredient}</p>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
