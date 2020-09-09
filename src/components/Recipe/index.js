import React, { useEffect } from 'react';
import { arrayOf, bool, shape, string, func } from 'prop-types';
import * as R from 'ramda';
import './recipe.scss';
import { gsap } from 'gsap';

// Component Imports
import Card from '../shared/Card';
import RecipeHeader from './RecipeHeader';
import RecipeIngredientsList from './RecipeIngredientsList/RecipeIngredientList.connector';
import RecipeInstructionsList from './RecipeInstructionsList/RecipeInstructionList.connector';
import { ReactComponent as DairySVG } from '../../assets/svgs/dairy.svg';
import { ReactComponent as FishSVG } from '../../assets/svgs/fish.svg';
import { ReactComponent as MeatSVG } from '../../assets/svgs/meat.svg';
import { ReactComponent as PoultrySVG } from '../../assets/svgs/meat2.svg';
import { ReactComponent as VegetableSVG } from '../../assets/svgs/vegetable.svg';
import { ReactComponent as BreadSVG } from '../../assets/svgs/bread.svg';

// Utils
import { tagList } from '../../const';

const Recipe = ({ recipeInfo, editModeActivated, setEditModeActivated }) => {
  const { name, description, img_url, prep_time, cook_time, users, tags } = recipeInfo;

  // returns an array of just the tag 'name's :: string
  const tagListPlucked = R.pluck('name', tags);

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
    if (tags.length) {
      gsap.from('.single-tag', { duration: 1, x: -1000, autoAlpha: 0, stagger: '0.5' }, '-=.5');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='recipe-container'>
      <RecipeHeader
        name={name}
        user_name={users[0]?.name}
        img_url={img_url}
        tags={tags}
        description={description}
        prep_time={prep_time}
        cook_time={cook_time}
        editModeActivated={editModeActivated}
        setEditModeActivated={setEditModeActivated}
      />
      <Card>
        <div className='tags-container'>
          {!editModeActivated
            ? tags?.map(({ id, name: icon_name }) => (
                <div className='single-tag' key={id} onFocus={() => {}}>
                  {getIcon(icon_name)}
                </div>
              ))
            : tagList?.map(tag => (
                <div
                  className={
                    tagListPlucked.includes(tag) ? 'single-tag selected-tag' : 'single-tag'
                  }
                  key={tag}
                  onFocus={() => {}}
                >
                  {getIcon(tag)}
                </div>
              ))}
        </div>
      </Card>
      <div className='bot-recipe-info'>
        <RecipeIngredientsList
          editModeActivated={editModeActivated}
          setEditModeActivated={setEditModeActivated}
        />
        <RecipeInstructionsList
          editModeActivated={editModeActivated}
          setEditModeActivated={setEditModeActivated}
        />
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipeInfo: shape({
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
  }).isRequired,
  editModeActivated: bool.isRequired,
  setEditModeActivated: func.isRequired
};

export default Recipe;
