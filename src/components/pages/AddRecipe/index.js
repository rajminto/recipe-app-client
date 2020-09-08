/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { func, shape, string, number, bool, arrayOf } from 'prop-types';
import styles from './AddRecipe.module.scss';
import Card from '../../shared/Card';
import Button from '../../shared/Button';
import ToggleButton from '../../shared/ToggleButton';
import { ReactComponent as DairySVG } from '../../../assets/svgs/dairy.svg';
import { ReactComponent as FishSVG } from '../../../assets/svgs/fish.svg';
import { ReactComponent as MeatSVG } from '../../../assets/svgs/meat.svg';
import { ReactComponent as PoultrySVG } from '../../../assets/svgs/meat2.svg';
import { ReactComponent as VegetableSVG } from '../../../assets/svgs/vegetable.svg';
import { ReactComponent as BreadSVG } from '../../../assets/svgs/bread.svg';

const AddRecipe = ({ postNewRecipe, recipeInfo, setRecipeInfo, clearForm }) => {
  const {
    addNewButtonWrapper,
    createRecipeForm,
    createRecipeFormContainer,
    deleteButtonWrapper,
    ingredientInstructionInput,
    ingredientInstructionInputWrapper,
    toggleSwitchContainer,
    tagsContainer,
    tagsSection,
    tagSelected,
    tagWrapper
  } = styles;

  const {
    ingredients,
    instructions,
    isPrivate,
    tags,
    name,
    description,
    img_url,
    prep_time,
    cook_time
  } = recipeInfo;

  const [instructionsList, setInstructionsList] = useState([{ description: '' }]);
  const [ingredientsList, setIngredientsList] = useState([{ name: '' }]);

  const tagIconMap = [
    {
      name: 'contains-poultry',
      icon: <PoultrySVG />
    },
    {
      name: 'contains-fish',
      icon: <FishSVG />
    },
    {
      name: 'contains-dairy',
      icon: <DairySVG />
    },
    {
      name: 'contains-meat',
      icon: <MeatSVG />
    },
    {
      name: 'vegetarian',
      icon: <VegetableSVG />
    },
    {
      name: 'contains-gluten',
      icon: <BreadSVG />
    }
  ];

  useEffect(() => {
    clearForm();
  }, []);

  const handleInputChange = e => {
    setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const recipe = {
      ...recipeInfo,
      ingredients,
      instructions: instructions.map((instruction, i) => {
        instruction.order = i + 1;
        return instruction;
      }),
      isPrivate,
      tags
    };
    postNewRecipe(recipe);
  };

  const handleIsPrivate = () => {
    setRecipeInfo({ ...recipeInfo, isPrivate: !isPrivate });
  };

  const updateIngredientList = (index, value) => {
    const newIngredients = ingredientsList.map((ingredient, i) => {
      if (i === index) {
        ingredient.name = value;
      }
      return ingredient;
    });
    setIngredientsList(newIngredients);
  };

  const handleIngredientChange = (value, i) => {
    updateIngredientList(i, value);
  };

  const addNewIngredient = () => {
    setRecipeInfo({ ...recipeInfo, ingredients: [...ingredients, { name: '' }] });
  };

  const deleteIngredient = index => {
    const newIngredients = ingredients.filter((ingredient, i) => i !== index);
    setRecipeInfo({ ...recipeInfo, ingredients: newIngredients });
  };

  const updateInstructionList = (index, value) => {
    const newInstructions = instructionsList.map((instruction, i) => {
      if (i === index) {
        instruction.description = value;
      }
      return instruction;
    });
    setInstructionsList(newInstructions);
  };

  const handleInstructionChange = (value, i) => {
    updateInstructionList(i, value);
  };

  const addNewInstruction = () => {
    setRecipeInfo({ ...recipeInfo, instructions: [...instructions, { description: '' }] });
  };

  const deleteInstruction = index => {
    const newInstructions = instructions.filter((instruction, i) => i !== index);
    setRecipeInfo({ ...recipeInfo, instructions: newInstructions });
  };

  const handleToggleTag = tag => {
    !tags.includes(tag)
      ? setRecipeInfo({ ...recipeInfo, tags: [...tags, tag] })
      : setRecipeInfo({ ...recipeInfo, tags: tags.filter(tagName => tagName !== name) });
  };

  return (
    <Card className={createRecipeFormContainer}>
      <h1>Create A Recipe</h1>
      <form className={createRecipeForm} onSubmit={handleFormSubmit}>
        <label htmlFor='name'>Recipe Name:</label>
        <input
          id='name'
          type='text'
          name='name'
          onChange={handleInputChange}
          value={name}
          required
        />
        <label>Description:</label>
        <input
          type='text'
          name='description'
          onChange={handleInputChange}
          value={description}
          required
        />
        <label>Upload an Image Here:</label>
        <input type='text' name='img_url' onChange={handleInputChange} value={img_url} required />
        <label>Prep Time:</label>
        <input
          type='text'
          name='prep_time'
          onChange={handleInputChange}
          value={prep_time}
          required
        />
        <label>Cook Time:</label>
        <input
          type='text'
          name='cook_time'
          onChange={handleInputChange}
          value={cook_time}
          required
        />
        <div className={toggleSwitchContainer}>
          <label>Private Recipe?</label>
          <label className={styles.switch}>
            <input
              id='isPrivate'
              type='checkbox'
              name='isPrivate'
              onChange={handleIsPrivate}
              checked={isPrivate}
              value={isPrivate}
            />
            <span className={`${styles.slider} ${styles.round}`} />
          </label>
        </div>
        <div className={tagsSection}>
          <label>Select Tags:</label>
          <div className={tagsContainer}>
            {tagIconMap.map((tag, index) => (
              <div
                key={index}
                className={`${tagWrapper} ${tags?.includes(tag.name) && tagSelected}`}
                onClick={() => handleToggleTag(tag.name)}
              >
                {tag.icon}
              </div>
            ))}
          </div>
        </div>
        <h1>Add Ingredients</h1>
        {ingredients.map((ingredient, i) => (
          <div className={ingredientInstructionInputWrapper} key={i}>
            <label>{i + 1}. </label>
            <div className={ingredientInstructionInput}>
              <input
                type='text'
                value={ingredientsList[i].name}
                onChange={e => handleIngredientChange(e.target.value, i)}
                required
              />
              <div className={deleteButtonWrapper} onClick={() => deleteIngredient(i)}>
                <ToggleButton variant='delete' />
              </div>
            </div>
          </div>
        ))}
        <div className={addNewButtonWrapper} onClick={addNewIngredient}>
          <label>Add New</label>
          <ToggleButton variant='plus' />
        </div>
        <h1>Add Instructions</h1>
        {instructionsList.map((instruction, i) => (
          <div className={ingredientInstructionInputWrapper} key={i}>
            <label>{i + 1}. </label>
            <div className={ingredientInstructionInput}>
              <input
                type='text'
                value={instructionsList[i].description}
                onChange={e => handleInstructionChange(e.target.value, i)}
                required
              />
              <div className={deleteButtonWrapper} onClick={() => deleteInstruction(i)}>
                <ToggleButton variant='delete' />
              </div>
            </div>
          </div>
        ))}
        <div className={addNewButtonWrapper} onClick={addNewInstruction}>
          <label>Add New</label>
          <ToggleButton variant='plus' />
        </div>
        <Button text='Submit' />
      </form>
    </Card>
  );
};

AddRecipe.propTypes = {
  clearForm: func.isRequired,
  postNewRecipe: func.isRequired,
  recipeInfo: shape({
    name: string,
    description: string,
    img_url: string,
    prep_time: string,
    cook_time: string,
    userId: number,
    isPrivate: bool,
    ingredients: arrayOf(shape({})),
    instructions: arrayOf(shape({}))
  }).isRequired,
  setRecipeInfo: func.isRequired
};

export default AddRecipe;

// ***PARAMS*** //
// CREATE RECIPE PARAMS name, description, img_url, prep_time, cook_time, userId, isPrivate
// Ingredients PARASMS::: name (string: include quantity), recipeId,
// Instructions: PARAMS::: description, order, recipeId,
