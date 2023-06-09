import { useState, useEffect } from 'react';
import styles from '../styles/addRecipe.module.css';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [country, setCountry] = useState('');
  const [instructions, setInstructions] = useState('');
  const [countries, setCountries] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [ingredientList, setIngredientList] = useState([
    { quantity: '', ingredient: '' },
  ]);

  const router = useRouter();

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch('/countries.json');
      const countriesData = await response.json();
      setCountries(countriesData);
    } catch (error) {
      throw new Error('Failed to fetch countries');
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

  const handleInstructionsChange = (event) => {
    setInstructions(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleAddIngredient = () => {
    setIngredientList([...ingredientList, { quantity: '', ingredient: '' }]);
  };

  const handleIngredientChange = (event, index) => {
    const updatedIngredients = [...ingredientList];
    updatedIngredients[index] = {
      ...updatedIngredients[index],
      ingredient: event.target.value,
    };
    setIngredientList(updatedIngredients);
  };
  
  const handleQuantityChange = (event, index) => {
    const updatedIngredients = [...ingredientList];
    updatedIngredients[index] = {
      ...updatedIngredients[index],
      quantity: event.target.value,
    };
    setIngredientList(updatedIngredients);
  };
  
  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const newRecipe = {
      name,
      author,
      country,
      instructions,
      imageUrl,
      ingredients: ingredientList,
    };
  
    setRecipes([...recipes, newRecipe]);
  
    try {
      const response = await axios.post('http://localhost:4000/recipes', newRecipe);
      router.push('/recipes');
    } catch (error) {
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        
        <h1>Add new recipe</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>

          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={handleAuthorChange}
              required
            />
          </div>

          <div>
            <label htmlFor="country">Recipe is from:</label>
            <select id="country" value={country} onChange={handleCountryChange}>
              <option value="">Select a country</option>
              {countries.map((countryName) => (
                <option value={countryName} key={countryName}>
                  {countryName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h3>Ingredients:</h3>
            {ingredientList.map((ingredient, index) => (
          <div key={index}>
            <label htmlFor={`ingredient-${index}`}>Ingredient:</label>
            <input
              type="text"
              id={`ingredient-${index}`}
              value={ingredient.ingredient}
              onChange={(event) => handleIngredientChange(event, index)}
              required
            />
            <label htmlFor={`quantity-${index}`}>Quantity:</label>
            <input
              type="text"
              id={`quantity-${index}`}
              value={ingredient.quantity}
              onChange={(event) => handleQuantityChange(event, index)}
              required
            />
          </div>
        ))}
          </div>

          <div>
            <button type="button" onClick={handleAddIngredient}>
              Add ingredients
            </button>
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
            <label htmlFor="url">Image:</label>
            <input
              type="url"
              id="url"
              name="url"
              value={imageUrl}
              size="30"
              required
              onChange={handleImageUrlChange}
            />
          </div>

          <div>
            <button type="submit">Post recipe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecipePage;
