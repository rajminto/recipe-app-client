import { connect } from 'react-redux';
import RecipeInstructionsList from './index';
import { setRecipeInfo } from '../store/recipeCreationSlice';

const mapState = state => ({
  recipeInfo: state.createRecipe.recipeCreationSlice.recipeInfo
});

const mapDispatch = {
  setRecipeInfo
};

export default connect(mapState, mapDispatch)(RecipeInstructionsList);
