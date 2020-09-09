import React, { useEffect, useState } from 'react';
import { arrayOf, bool, number, shape, string, func } from 'prop-types';
import styles from './recipe-ingredients-list.module.scss';

// Component imports
import RecipeIngredient from './RecipeIngredient';
import Card from '../../shared/Card';
import EditRecipeIngredient from './EditRecipeIngredient';

const RecipeIngredientsList = ({
  editModeActivated,
  // setRecipeInfo,
  recipeInfo,
  setEditedIngredientList
}) => {
  const [newList, setNewList] = useState([]);

  console.log('FUCK:', recipeInfo);

  useEffect(() => {
    if (recipeInfo) {
      setNewList(recipeInfo.ingredients);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeInfo.ingredients]);

  useEffect(() => {
    setEditedIngredientList(newList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newList]);

  // const deleteIngredient = index => {
  //   const newIngredients = recipeInfo.ingredients.filter((instruction, i) => i !== index);
  //   setRecipeInfo({ ...recipeInfo, ingredients: newIngredients });
  // };

  const updateIngredientList = (value, id) => {
    setNewList(
      newList?.map((item, i) => {
        if (i !== id) return item;
        return { ...item, name: value };
      })
    );
  };

  const handleIngredientChange = (value, id) => {
    updateIngredientList(value, id);
  };

  const ingredientComponents = recipeInfo?.ingredients?.map((ingredient, i) => {
    if (editModeActivated) {
      // eslint-disable-next-line react/no-array-index-key
      return (
        <EditRecipeIngredient
          ingredientIndex={i}
          name={ingredient.name}
          handleIngredientChange={handleIngredientChange}
          recipeInfo={recipeInfo}
        />
      );
    }
    // eslint-disable-next-line react/no-array-index-key
    return <RecipeIngredient key={i} name={ingredient.name} />;
  });

  return (
    <Card className={styles.ingredientsListContainer}>
      <h2>Ingredients</h2>
      <Card className={styles.ingredientsListCard}>{ingredientComponents}</Card>
    </Card>
  );
};

RecipeIngredientsList.propTypes = {
  editModeActivated: bool.isRequired,
  ingredients: arrayOf(
    shape({
      name: string.isRequired,
      id: number
    })
  ).isRequired,
  recipeInfo: shape({}).isRequired,
  setRecipeInfo: func.isRequired,
  setEditedIngredientList: func.isRequired
};

export default RecipeIngredientsList;
