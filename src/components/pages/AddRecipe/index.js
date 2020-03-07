import React, { useState } from 'react'
import styles from './AddRecipe.module.scss'
import Card from '../../shared/Card'
import Button from '../../shared/Button'

const AddRecipe = () => {

  const { 
    createRecipeFormContainer, 
    createRecipeForm 
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

  const handleInputChange = (e) => {
    setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Recipe Info:', recipeInfo, isRecipePrivate)
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