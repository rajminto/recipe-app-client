import React, { Fragment } from 'react'

const RecipeHeader = ({ name, user_name }) => (
  <Fragment>
    <h1>{name}</h1>
    <h2>By: {user_name}</h2>
  </Fragment>
)

export default RecipeHeader