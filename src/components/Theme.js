import { makeStyles } from '@material-ui/core/styles';

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
    fontSize: '12rem',
    color: '#d1d9e6',
    filter: 'drop-shadow(2px 4px 4px #b8b9be)',
  },
  recipeText: {
    color: '#d1d9e6',
    fontSize: '4rem',
    textShadow: '2px 2px 3px #b8b9be',
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

export const classes = makeStyles();
