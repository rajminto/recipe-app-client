import React, { Fragment } from 'react'
import './recipe-description.css'

const RecipeDescription = ({ description, prep_time, cook_time }) => {
  return (
    <Fragment>
      <h2>Recipe Description</h2>
      <p>{description}</p>
      <h4>Prep Time: {prep_time}</h4>
      <h4>Cook Time: {cook_time}</h4>
    </Fragment>
  )
}

export default RecipeDescription