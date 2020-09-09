import { connect } from 'react-redux';
import RecipeIngredientsList from './index';
import { setEditedIngredientList, setRecipeInfo } from '../store/recipeCreationSlice';

const mapState = state => ({
  recipeInfo: state.createRecipe.recipeCreationSlice.recipeInfo,
  editedIngredientList: state.createRecipe.recipeCreationSlice.editedIngredientList
});

const mapDispatch = {
  setRecipeInfo,
  setEditedIngredientList
};

export default connect(mapState, mapDispatch)(RecipeIngredientsList);
