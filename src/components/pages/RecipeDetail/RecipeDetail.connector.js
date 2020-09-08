import { connect } from 'react-redux';
import RecipeDetail from './index';
import { setRecipeInfo } from '../../Recipe/store/recipeCreationSlice';

const mapState = state => ({
  recipeInfo: state.createRecipe.recipeCreationSlice.recipeInfo
});

const mapDispatch = {
  setRecipeInfo
};

export default connect(mapState, mapDispatch)(RecipeDetail);
