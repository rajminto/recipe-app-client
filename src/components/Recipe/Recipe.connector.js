import { connect } from 'react-redux';
import Recipe from './index';
import { setEditModeActivated } from './store/recipeCreationSlice';

const mapState = state => ({
  editModeActivated: state.createRecipe,
  recipe: state.createRecipe
});

const mapDispatch = {
  setEditModeActivated
};

export default connect(mapState, mapDispatch)(Recipe);
