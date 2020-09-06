import React from 'react';

import { FormGroup, TextField, Button, Typography } from '@material-ui/core';

const Form = ({
  submit,
  inputError,
  query,
  updateSearch,
  classes,
  formGroup,
  errorMsg,
}) => {
  return (
    <div className="form">
      <form onSubmit={submit}>
        <FormGroup row={true} className={formGroup}>
          <TextField
            id="outlined-basic"
            error={inputError}
            label="Enter Recipe Name"
            variant="outlined"
            name="recipe"
            type="search"
            placeholder="Paneer, Biryani ..."
            value={query}
            onChange={updateSearch}
          />
          <Button
            size="medium"
            variant="contained"
            type="submit"
            color="primary"
            className={classes}
          >
            Search
          </Button>
        </FormGroup>
        {inputError ? (
          <Typography variant="body1" color="error" className={errorMsg}>
            Please Enter Food Recipe Name
          </Typography>
        ) : (
          ''
        )}
      </form>
    </div>
  );
};

export default Form;
