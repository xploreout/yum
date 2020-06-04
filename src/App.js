import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

import './App.css';

const App = () => {
  const APP_ID = '';
  const APP_KEY = '';

  let [search, setSearch] = useState('');
  let [query, setQuery] = useState('chicken');
  let [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipeApi();
  }, [query]);

  const getRecipeApi = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  const searchChangeHandler = e => {
    setSearch(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    setQuery(search);
    // getRecipeApi(e.target.value);
  };

  return (
    <div className='App'>
      <form className='search-form' onSubmit={submitHandler}>
        <input
          className='search-bar'
          type='text'
          value={search}
          onChange={searchChangeHandler}
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
