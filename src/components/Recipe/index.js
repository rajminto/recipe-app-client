import React, { useEffect } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import './recipe.scss';
import { gsap } from 'gsap';

// Component Imports
import Card from '../shared/Card';
import RecipeHeader from './RecipeHeader';
import RecipeIngredientsList from './RecipeIngredientsList';
import RecipeInstructionsList from './RecipeInstructionsList';
import { ReactComponent as DairySVG } from '../../assets/svgs/dairy.svg';
import { ReactComponent as FishSVG } from '../../assets/svgs/fish.svg';
import { ReactComponent as MeatSVG } from '../../assets/svgs/meat.svg';
import { ReactComponent as PoultrySVG } from '../../assets/svgs/meat2.svg';
import { ReactComponent as VegetableSVG } from '../../assets/svgs/vegetable.svg';
import { ReactComponent as BreadSVG } from '../../assets/svgs/bread.svg';

const Recipe = ({ recipe, recipeInfo, editModeActivated }) => {
  const {
    name,
    description,
    img_url,
    prep_time,
    cook_time,
    users,
    instructions,
    ingredients,
    tags
  } = recipeInfo;

  const getIcon = type => {
    switch (type) {
      case 'contains-poultry':
        return <PoultrySVG />;
      case 'contains-fish':
        return <FishSVG />;
      case 'contains-dairy':
        return <DairySVG />;
      case 'contains-meat':
        return <MeatSVG />;
      case 'vegetarian':
        return <VegetableSVG />;
      case 'contains-gluten':
        return <BreadSVG />;
      default:
        return null;
    }
  };

  useEffect(() => {
    gsap.from('.single-tag', { duration: 1, x: -1000, autoAlpha: 0, stagger: '0.5' }, '-=.5');
  }, []);

  return (
    <div className='recipe-container'>
      <RecipeHeader
        name={name}
        user_name={users[0].name}
        img_url={img_url}
        tags={tags}
        description={description}
        prep_time={prep_time}
        cook_time={cook_time}
      />
      <Card>
        <div className='tags-container'>
          {tags.map(({ id, name: icon_name }) => (
            <div className='single-tag' key={id} onFocus={() => {}}>
              {getIcon(icon_name)}
            </div>
          ))}
        </div>
      </Card>
      <div className='bot-recipe-info'>
        <RecipeIngredientsList ingredients={ingredients} />
        <RecipeInstructionsList instructions={instructions} />
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: shape({
    name: string.isRequired,
    instructions: arrayOf(shape({})).isRequired,
    ingredients: arrayOf(shape({})).isRequired,
    description: string.isRequired,
    img_url: string.isRequired,
    prep_time: string.isRequired,
    cook_time: string.isRequired,
    tags: arrayOf(shape({})).isRequired,
    users: arrayOf(
      shape({
        name: string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default Recipe;
