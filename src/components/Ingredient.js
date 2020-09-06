import React from 'react';
import { List, ListItem } from '@material-ui/core';

const Ingredient = ({ ingredients }) => {
  return (
    <div>
      <List>
        {ingredients.map((ingredient, index) => (
          <ListItem divider key={index}>
            {ingredient.text}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Ingredient;
