import React, { useState } from 'react'
import styles from './AddRecipe.module.scss'
import Card from '../../shared/Card'
import Button from '../../shared/Button'
import ToggleButton from '../../shared/ToggleButton'

const AddRecipe = () => {
  const { 
    addNewButtonWrapper,
    createRecipeForm,
    createRecipeFormContainer, 
    deleteButtonWrapper,
    ingredientInput,
    ingredientInputWrapper 
  } = styles

  const [recipeInfo, setRecipeInfo] = useState({ 
    name: '', 
    description: '', 
    img_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190130-tacos-al-pastor-horizontal-1-1549571422.png', 
    prep_time: '', 
    cook_time: '', 
    userId: null, 
  })   
  const [isRecipePrivate, setRecipePrivate] = useState(false)
  const [ingredients, setIngredients] = useState([{ name: '' }])

  const handleInputChange = (e) => {
    setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    clearForm()
  }

  const clearForm = () => {
    setRecipeInfo({ 
      name: '', 
      description: '', 
      img_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190130-tacos-al-pastor-horizontal-1-1549571422.png', 
      prep_time: '', 
      cook_time: '', 
      userId: null, 
    })
    setRecipePrivate(false)
  }

  const handleIsPrivate = () => {
    setRecipePrivate(!isRecipePrivate)
  }

  const updateIngredientList = (index, value) => {
    const newIngredients = ingredients.map((ingredient, i) => {
      if(i === index){
        ingredient.name = value
      }
      return ingredient
    })
    setIngredients(newIngredients)
    console.log(ingredients)
  }

  const handleIngredientChange = (value, i) => {
    updateIngredientList(i, value)
  }

  const addNewIngredient = () => {
    setIngredients([...ingredients, { name: '' }])
  }

  const deleteIngredient = (index) => {
    const newIngredients = ingredients.filter((ingredient, i) => i !== index)
    setIngredients(newIngredients)
  }

  
  return (
    <Card className={createRecipeFormContainer}>
      <h1>Create A Recipe</h1>
      <form className={createRecipeForm} onSubmit={handleFormSubmit}>
        <label>Recipe Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={recipeInfo.name}
          required
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          onChange={handleInputChange}
          value={recipeInfo.description}
          required
        />
        <label>Upload an Image Here:</label>
        <input
          type="text"
          name="img_url"
          onChange={handleInputChange}
          value={recipeInfo.img_url}
          required
        />
        <label>Prep Time:</label>
        <input
          type="text"
          name="prep_time"
          onChange={handleInputChange}
          value={recipeInfo.prep_time}
          required
        />
        <label>Cook Time:</label>
        <input
          type="text"
          name="cook_time"
          onChange={handleInputChange}
          value={recipeInfo.cook_time}
          required
        />
        <label>Would You Like Your Recipe to be Private?</label>
        <input
          type="checkbox"
          name="isPrivate"
          onChange={handleIsPrivate}
          checked={isRecipePrivate}
          value={isRecipePrivate}
        />
        <h1>Add Ingredients</h1>
        {ingredients.map((ingredient, i) => (
          <div className={ingredientInputWrapper}>
            <label>{i + 1}. </label>
            <div className={ingredientInput}>
              <input 
                type="text"
                value={ingredients[i].name}
                onChange={(e) => handleIngredientChange(e.target.value, i)}
              />
              <div className={deleteButtonWrapper} onClick={() => deleteIngredient(i)}>
                <ToggleButton variant="delete" />
              </div>
            </div>
          </div>
        ))}
        <div className={addNewButtonWrapper} onClick={addNewIngredient}>
          <label>Add New Ingredient</label>
          <ToggleButton variant="plus" />
        </div>
        <Button text='Submit'/>
      </form>
    </Card>
  )
}
export default AddRecipe

// ***PARAMS*** //
// CREATE RECIPE PARAMS name, description, img_url, prep_time, cook_time, userId, isPrivate
// Ingredients PARASMS::: name (string: include quantity), recipeId, 
// Instructions: PARAMS::: description, order, recipeId, 