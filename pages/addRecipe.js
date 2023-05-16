import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/recipe.module.css';
import axios from 'axios';

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [country, setCountry] = useState('');
  const [quantity, setQuantity] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [instructions, setInstructions] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const countriesData = response.data.map((country) => country.name.common);
      setCountries(countriesData);
    } catch (error) {
      console.error('Failed to fetch countries:', error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleIngredientChange = (event) => {
    setIngredient(event.target.value);
  };

  const handleInstructionsChange = (event) => {
    setInstructions(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted:', {
      name,
      author,
      country,
      quantity,
      ingredient,
      instructions,
    });

    const newRecipe = {
      name,
      author,
      country,
      quantity,
      ingredient,
      instructions,
    };

    setRecipes(...recipes,newRecipe)

    try {
      const response = await axios.post('http://localhost:4000/recipes', newRecipe);
      console.log('Recipe posted:', response.data);
    } catch (error) {
      console.error('Failed to post recipe:', error);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Recipe Page</h1>
      <Link href="/">Go to Home Page</Link>
      <Link href="/recipes">Find recipes</Link>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input required
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div>
            <label htmlFor="author">Author:</label>
            <input required
              type="text"
              id="author"
              value={author}
              onChange={handleAuthorChange}
            />
          </div>

          <div>
            <label htmlFor="country">Recipe is from:</label>
            <select required id="country" value={country} onChange={handleCountryChange}>
            <option value="">Select a country</option>
            {countries.map((countryName) => (
              <option value={countryName} key={countryName}>
                {countryName}
              </option>
            ))}
          </select>


          </div>

          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input required
              type="text"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>

          <div>
            <label htmlFor="ingredient">Ingredient:</label>
            <input required
              type="text"
              id="ingredient"
              value={ingredient}
              onChange={handleIngredientChange}
            />
          </div>

          <div>
            <button type="button">Add more</button>
          </div>

          <div>
            <label htmlFor="instructions">Instructions:</label>
            <textarea
              id="instructions"
              value={instructions}
              onChange={handleInstructionsChange}
            />
          </div>

          <div>
            <button type="submit">Post recipe</button>
</div>
</form>
   <div>
      {recipes.length > 0 &&
        recipes.map((recipe, index) => {
          return (
            <div key={index}>
              <h2>{recipe.name}</h2>
              <p>{recipe.author}</p>
              <p>{recipe.country}</p>
              <p>{recipe.quantity}</p>
              <p>{recipe.ingredient}</p>
              <p>{recipe.instructions}</p>
            </div>
          );
        })}
    </div>
  </div>

);
};

export default RecipePage;
