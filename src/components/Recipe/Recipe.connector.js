import { connect } from 'react-redux';
import Recipe from './index';
import { setEditModeActivated } from './store/recipeCreationSlice';

const mapState = state => ({
  editModeActivated: state.createRecipe.recipeCreationSlice.editModeActivated,
  recipe: state.createRecipe.recipeCreationSlice.recipe
});

const mapDispatch = {
  setEditModeActivated
};

export default connect(mapState, mapDispatch)(Recipe);
