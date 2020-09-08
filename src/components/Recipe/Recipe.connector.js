import { connect } from 'react-redux';
import Recipe from './index';
import { setEditModeActivated, setRecipeInfo } from './store/recipeCreationSlice';

const mapState = state => ({
  editModeActivated: state.createRecipe.recipeCreationSlice.editModeActivated,
  recipeInfo: state.createRecipe.recipeCreationSlice.recipeInfo
});

const mapDispatch = {
  setEditModeActivated,
  setRecipeInfo
};

export default connect(mapState, mapDispatch)(Recipe);
