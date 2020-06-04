import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, ingredients, image }) => {
  return (
    <div className={style.recipe}>
      <h2>{title}</h2>
      <ul>
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.text}</li>
        ))}
      </ul>
      <p className='calories'>Calories: {calories.toFixed(2)}</p>
      <img src={image} alt='' />
    </div>
  );
};

export default Recipe;
