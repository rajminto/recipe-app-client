import { connect } from 'react-redux';
import AddRecipe from './index';
import { postNewRecipe } from '../../Recipe/store/recipeCreationSlice';

const mapState = state => ({
  recipe: state.createRecipe.recipeCreationSlice.recipe
});

const mapDispatch = {
  postNewRecipe
};

export default connect(mapState, mapDispatch)(AddRecipe);
