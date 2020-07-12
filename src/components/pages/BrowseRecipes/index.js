import React, { useState, useEffect, useRef, createRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BrowseRecipes.module.scss';
import { ReactComponent as DairySVG } from '../../../assets/svgs/dairy.svg';
import { ReactComponent as FishSVG } from '../../../assets/svgs/fish.svg';
import { ReactComponent as MeatSVG } from '../../../assets/svgs/meat.svg';
import { ReactComponent as PoultrySVG } from '../../../assets/svgs/meat2.svg';
import { ReactComponent as VegetableSVG } from '../../../assets/svgs/vegetable.svg';

// Components
import Card from '../../shared/Card';
import RecipeCardSmall from '../../shared/RecipeCardSmall';
import Tooltip from '../../shared/Tooltip';

// Utils
import { baseUrl } from '../../../api';

const BrowseRecipes = () => {
  const [recipeData, setRecipeData] = useState();
  const [chosenTags, setChosenTags] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPositionProps, setTooltipPositionProps] = useState({});
  const {
    browseRecipesContainer,
    headerTitle,
    navLink,
    recipesContainer,
    recipesCard,
    singleTag,
    tagsContainer,
    tagSelected
  } = styles;

  const tagsMap = [
    {
      label: 'Contains Poultry',
      svgComponent: <PoultrySVG />,
      data_stamp: 'contains-poultry'
    },
    {
      label: 'Contains Fish',
      svgComponent: <FishSVG />,
      data_stamp: 'contains-fish'
    },
    {
      label: 'Contains Dairy',
      svgComponent: <DairySVG />,
      data_stamp: 'contains-dairy'
    },
    {
      label: 'Contains Meat',
      svgComponent: <MeatSVG />,
      data_stamp: 'contains-meat'
    },
    {
      label: 'Vegetarian',
      svgComponent: <VegetableSVG />,
      data_stamp: 'vegetarian'
    }
  ];

  const tagsRef = useRef(tagsMap.map(() => createRef()));

  const getRecipes = () => {
    const url = `${baseUrl}/api/recipes`;
    return fetch(url).then(res => res.json());
  };

  useEffect(() => {
    getRecipes().then(data => setRecipeData(data.recipes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkContain = (superset, subset) => {
    if (subset.length === 0) {
      return true;
    }
    return subset.every(value => {
      return superset.indexOf(value) >= 0;
    });
  };

  const renderRecipeCards = () => {
    const recipeCards = recipeData?.map(recipe => {
      const recipeSpecificTags = [];
      recipe.tags.map(tag => recipeSpecificTags.push(tag.name));
      if (checkContain(recipeSpecificTags, chosenTags) === true) {
        return (
          <NavLink className={navLink} key={recipe.id} to={`/recipes/${recipe.id}`}>
            <RecipeCardSmall recipe={recipe} />
          </NavLink>
        );
      }
      return null;
    });
    return recipeCards;
  };

  const handleTagToggle = stamp => {
    if (chosenTags.includes(stamp)) {
      setChosenTags(chosenTags.filter(e => e !== stamp));
    } else {
      setChosenTags([...chosenTags, stamp]);
    }
  };

  const handleTagHover = index => {
    const currentTagRef = tagsRef.current[index];
    const currentTagDims = currentTagRef.getBoundingClientRect();
    const tooltipDimProps = {
      x: currentTagDims.x,
      y: currentTagDims.y,
      top: currentTagDims.top,
      left: currentTagDims.left,
      bottom: currentTagDims.bottom,
      label: tagsMap[index].label
    };
    setTooltipPositionProps(tooltipDimProps);
    setShowTooltip(true);
  };

  const tagsDasboard = (
    <Card>
      <div className={tagsContainer}>
        {tagsMap.map(({ label, svgComponent, data_stamp }, index) => (
          <div
            className={`${singleTag} ${chosenTags.includes(data_stamp) && tagSelected}`}
            key={label}
            onClick={() => handleTagToggle(data_stamp)}
            onMouseEnter={() => handleTagHover(index)}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => {}}
            // eslint-disable-next-line no-return-assign
            ref={el => (tagsRef.current[index] = el)}
          >
            {svgComponent}
          </div>
        ))}
        <Tooltip
          tooltipPositionProps={tooltipPositionProps}
          setShowTooltip={setShowTooltip}
          showTooltip={showTooltip}
        />
      </div>
    </Card>
  );

  return (
    <div className={browseRecipesContainer}>
      {tagsDasboard}
      <Card className={recipesCard}>
        <h1 className={headerTitle}>Browse Recipes</h1>
        <div className={recipesContainer}>{renderRecipeCards()}</div>
      </Card>
    </div>
  );
};

export default BrowseRecipes;
