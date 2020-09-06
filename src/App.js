import React, { useState } from 'react';

import Form from './components/Form';
import Header from './components/Header';
import Recipe from './components/Recipe';
import Loader from './components/Loader';
import Static from './components/Static';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import InvalidRecipe from './components/InvalidRecipe';

import axios from 'axios';

import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LocalDiningIcon from '@material-ui/icons/LocalDining';

import './App.css';

import logo from './images/logo.png';

const APP_ID = process.env.REACT_APP_APPLICATION_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [invalidRecipe, setInvalidRecipe] = useState(false);
  const [showPerPage, setShowPerPage] = useState(9);
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(1);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const useStyles = makeStyles((theme) => ({
    margin: {
      marginLeft: theme.spacing(1),
      padding: '6px 25px',
    },
    recipeBox: {
      paddingTop: theme.spacing(5),
    },
    paginationBtns: {
      display: 'flex',
      justifyContent: 'space-evenly',
      padding: '.5rem 0 5rem',
    },
    formGroup: {
      flexWrap: 'nowrap',
    },
    errorMsg: {
      position: 'absolute',
    },
    recipeIcon: {
      fontSize: '18rem',
      color: '#d1d9e6',
      filter: 'drop-shadow(2px 4px 4px #b8b9be)',
    },
    recipeText: {
      color: '#d1d9e6',
      fontSize: '3rem',
      fontWeight: 'bold',
    },
    invalidRecipeIcon: {
      color: '#ef5350',
      fontSize: '10rem',
    },
    invalidRecipeText: {
      color: '#ef5350',
      fontSize: '2.5rem',
    },
  }));
  const classes = useStyles();

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const getRecipe = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=50`
    );
    setPagination({ start: 0, end: 9 });
    setLoading(false);
    setRecipes(response.data.hits);
    if (!response.data.more) {
      setInvalidRecipe(true);
    }
    // console.log(response);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const searchInput = e.target.elements.recipe;
    if (query === '') {
      setInputError(true);
    } else {
      setCounter(1);
      setInvalidRecipe(false);
      setInputError(false);
      getRecipe();
      setQuery('');
      searchInput.blur();
    }
  };

  const updateSearch = (e) => {
    setQuery(e.target.value);
  };

  const nextBtn = () => {
    setCounter(counter + 1);
  };

  const prevBtn = () => {
    setCounter(counter - 1);
  };

  const recipesData = invalidRecipe ? (
    <InvalidRecipe
      recipeIcon={classes.invalidRecipeIcon}
      recipeText={classes.invalidRecipeText}
    />
  ) : !invalidRecipe ? (
    recipes.slice(pagination.start, pagination.end).map((recipe, index) => {
      return <Recipe key={index} recipe={recipe} />;
    })
  ) : (
    'Offline'
  );

  return (
    <React.Fragment>
      <Header logo={logo} />
      <div className={`app ${loading ? 'loading' : ''}`}>
        <Container maxWidth="sm">
          <Form
            submit={onFormSubmit}
            inputError={inputError}
            query={query}
            updateSearch={updateSearch}
            classes={classes.margin}
            formGroup={classes.formGroup}
            errorMsg={classes.errorMsg}
          />
        </Container>
        <Container maxWidth="lg" className={classes.recipeBox}>
          {loading ? (
            <Loader />
          ) : invalidRecipe || recipes.length !== 0 ? (
            <Grid container justify="center" spacing={3}>
              {recipesData}
            </Grid>
          ) : !invalidRecipe && recipes.length === 0 ? (
            <Static
              recipeIcon={classes.recipeIcon}
              recipeText={classes.recipeText}
              text="FOOD RECIPE FINDER"
              icon={
                <LocalDiningIcon
                  className={`recipe-icon ${classes.recipeIcon}`}
                />
              }
            />
          ) : (
            ''
          )}
        </Container>
      </div>

      {recipes.length > 0 && !invalidRecipe ? (
        <Pagination
          showPerPage={showPerPage}
          paginationBtns={classes.paginationBtns}
          onPaginationChange={onPaginationChange}
          counter={counter}
          prevBtn={prevBtn}
          nextBtn={nextBtn}
        />
      ) : (
        ''
      )}
      <Footer />
    </React.Fragment>
  );
};

export default App;
