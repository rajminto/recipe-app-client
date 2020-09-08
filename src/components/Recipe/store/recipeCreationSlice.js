import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';
import { baseUrl } from '../../../api';

const initialState = {
  editModeActivated: false,
  recipe: {
    name: '',
    description: '',
    img_url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190130-tacos-al-pastor-horizontal-1-1549571422.png',
    prep_time: '',
    cook_time: '',
    userId: null,
    isPrivate: null,
    ingredients: [],
    instructions: [],
    tags: []
  }
};

const reducers = {
  setEditModeActivated(state, { payload }) {
    return R.assoc('editModeActivated', payload, state);
  },
  clearForm(state, { payload }) {
    return R.assoc('recipe', payload, state);
  },
  setInstructionsList(state, { payload }) {
    return R.assoc('instructions', payload, state);
  },
  setIngredientsList(state, { payload }) {
    return R.assoc('ingredients', payload, state);
  }
};

const { actions, reducer } = createSlice({
  initialState,
  name: 'recipeCreationSlice',
  reducers
});

export const { clearForm, setEditModeActivated, setInstructionsList, setIngredientsList } = actions;

export const postNewRecipe = recipe => async dispatch => {
  const options = {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  };
  try {
    const res = await fetch(`${baseUrl}/api/recipes`, options);
    const response = await res.json();
    if (response.success) {
      dispatch(clearForm(initialState.recipe)); // TODO: Update UI in failure conditions
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error:', err);
  }
};

export default reducer;
