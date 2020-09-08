import { connect } from 'react-redux';
import AddRecipe from './index';
import { postNewRecipe, setRecipeInfo } from '../../Recipe/store/recipeCreationSlice';

const mapState = state => ({
  recipeInfo: state.createRecipe.recipeCreationSlice.recipeInfo
});

const mapDispatch = {
  postNewRecipe,
  setRecipeInfo
};

export default connect(mapState, mapDispatch)(AddRecipe);
