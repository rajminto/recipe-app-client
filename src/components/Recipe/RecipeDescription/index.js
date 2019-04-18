import React, { Fragment } from 'react'
import './recipe-description.css'

const RecipeDescription = ({ description, prep_time, cook_time }) => {
  return (
    <Fragment>
      <h2>Recipe Description</h2>
      <p>{description}</p>
      <div className="recipe-times-container">
        <p>Prep Time: {prep_time}</p>
        <p>Cook Time: {cook_time}</p>
      </div>
    </Fragment>
  )
}

export default RecipeDescription