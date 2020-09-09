import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';
import { baseUrl } from '../../../api';

const initialState = {
  editModeActivated: false,
  recipeInfo: {
    name: '',
    description: '',
    img_url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190130-tacos-al-pastor-horizontal-1-1549571422.png',
    prep_time: '',
    cook_time: '',
    userId: null,
    users: [],
    isPrivate: false,
    ingredients: [{ id: null, name: '' }],
    instructions: [{ description: '', order: null }],
    tags: [],
    user_name: ''
  },
  editedIngredientList: [],
  editedInstructionList: [{ description: '', order: null }]
};

const reducers = {
  setEditModeActivated(state, { payload }) {
    return R.assoc('editModeActivated', payload, state);
  },
  clearForm(state) {
    return R.assoc('recipeInfo', initialState.recipeInfo, state);
  },
  setRecipePrivate(state, { payload }) {
    return R.assoc('isPrivate', payload, state);
  },
  setRecipeInfo(state, { payload }) {
    return R.assoc('recipeInfo', payload, state);
  },
  setEditedIngredientList(state, { payload }) {
    return R.assoc('editedIngredientList', payload, state);
  },
  setEditedInstructionList(state, { payload }) {
    return R.assoc('editedInstructionList', payload, state);
  }
};

const { actions, reducer } = createSlice({
  initialState,
  name: 'recipeCreationSlice',
  reducers
});

export const {
  clearForm,
  setEditModeActivated,
  setEditedInstructionList,
  setEditedIngredientList,
  setRecipePrivate,
  setRecipeInfo
} = actions;

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
      dispatch(clearForm(initialState.recipeInfo)); // TODO: Update UI in failure conditions
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error:', err);
  }
};

export default reducer;
