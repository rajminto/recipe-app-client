import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';

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
  }
};

const { actions, reducer } = createSlice({
  initialState,
  name: 'recipeCreationSlice',
  reducers
});

export const { setEditModeActivated } = actions;

export default reducer;
