import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { shape, string } from 'prop-types';
import { baseUrl } from '../../../api';

// Component imports
import Recipe from '../../Recipe/Recipe.connector';
import Loader from '../../shared/Loader';

const RecipeDetail = ({ setRecipeInfo }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  // Capture id from url params
  const { id } = useParams();

  const fetchRecipeById = (recipeId = 1) => {
    fetch(`${baseUrl}/api/recipes/${recipeId}`)
      .then(res => res.json())
      .then(response => {
        if (response.success) {
          setIsLoaded(true);
          setRecipeInfo(response.recipe);
        } else {
          setIsLoaded(true);
          setError(true);
          setMessage(response.message);
        }
      })
      // eslint-disable-next-line no-console
      .catch(console.log);
  };

  useEffect(() => {
    // Validate id: ensure it is a number
    // eslint-disable-next-line radix
    if (!parseInt(id)) {
      setError(true);
      setMessage('Recipe not found. Please enter a valid ID.');
    } else {
      fetchRecipeById(id);
    }
  }, []);

  return (
    // TODO: Replace with component with options to search again, go back to profile, etc.
    <>
      {error ? (
        <h1>{message}</h1>
      ) : (
        <div className='home-container'>{isLoaded ? <Recipe /> : <Loader />}</div>
      )}
    </>
  );
};

RecipeDetail.propTypes = {
  match: shape({
    params: shape({
      id: string.isRequired
    }).isRequired
  }).isRequired
};

export default RecipeDetail;
