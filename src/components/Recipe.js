import React, { useState } from 'react';
import Ingredient from './Ingredient';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import LocalDiningIcon from '@material-ui/icons/LocalDining';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '70.25%', // 16:9
  },
  ingredientMargin: {
    marginLeft: 'auto',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  recipeContainer: {
    paddingTop: theme.spacing(2),
  },
  calorieTextStyle: {
    color: '#ef5350',
  },
}));

const Recipe = ({ recipe }) => {
  const [showIngredient, setShowIngredient] = useState(false);

  const classes = useStyles();

  const handleExpandClick = () => {
    setShowIngredient(!showIngredient);
  };

  const { label, image, url, calories, ingredients } = recipe.recipe;
  const recipeTitle = <Typography variant="h6">{label}</Typography>;
  const calorie = (
    <Typography className={classes.calorieTextStyle}>
      {`Calories: ${Math.round(calories)}`}
    </Typography>
  );
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6} lg={4}>
        <Card>
          <CardHeader title={recipeTitle} subheader={calorie} />
          <CardMedia className={classes.media} image={image} title={label} />
          <CardContent></CardContent>
          <CardActions disableSpacing>
            {/* <Button size="small" color="primary">
              Share
            </Button> */}
            <Button
              href={url}
              size="small"
              target="_blank"
              color="primary"
              endIcon={<LocalDiningIcon />}
            >
              Directions
            </Button>
            <Button
              className={classes.ingredientMargin}
              variant="contained"
              color="primary"
              onClick={handleExpandClick}
              aria-expanded={showIngredient}
              endIcon={
                <ArrowDownwardIcon
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: showIngredient,
                  })}
                />
              }
            >
              Ingredients
            </Button>
          </CardActions>
          <Collapse in={showIngredient} timeout="auto" unmountOnExit>
            <CardContent>
              <Ingredient ingredients={ingredients} />
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default Recipe;
