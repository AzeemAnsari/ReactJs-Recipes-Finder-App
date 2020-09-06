import React from 'react';
import Static from './Static';
import ErrorIcon from '@material-ui/icons/Error';

const InvalidRecipe = ({ recipeIcon, recipeText }) => {
  return (
    <React.Fragment>
      <Static
        recipeText={recipeText}
        text="No food with such name!"
        icon={<ErrorIcon className={recipeIcon} />}
      />
    </React.Fragment>
  );
};

export default InvalidRecipe;
