import React from 'react';

import { Typography, Grid } from '@material-ui/core';

const Static = ({ recipeText, text, icon }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      alignContent="center"
      justify="center"
      className="staticContainer"
    >
      <Grid item>{icon}</Grid>
      <Grid item>
        <Typography className={recipeText} align="center" variant="h4">
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Static;
