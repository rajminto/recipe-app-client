import { connect } from 'react-redux';
import RecipeInstructionsList from './index';
import { setEditedInstructionList, setRecipeInfo } from '../store/recipeCreationSlice';

const mapState = state => ({
  recipeInfo: state.createRecipe.recipeCreationSlice.recipeInfo,
  editedInstructionList: state.createRecipe.recipeCreationSlice.editedInstructionList
});

const mapDispatch = {
  setRecipeInfo,
  setEditedInstructionList
};

export default connect(mapState, mapDispatch)(RecipeInstructionsList);
