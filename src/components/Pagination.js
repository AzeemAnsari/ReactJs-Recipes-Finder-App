import React, { useEffect } from 'react';

import { Container, Button } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

const Pagination = ({
  paginationBtns,
  showPerPage,
  onPaginationChange,
  counter,
  prevBtn,
  nextBtn,
}) => {
  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  return (
    <Container className={paginationBtns}>
      {counter > 1 && (
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ArrowBack />}
          onClick={prevBtn}
        >
          Prev
        </Button>
      )}
      {counter <= 5 && (
        <Button
          variant="contained"
          color="secondary"
          endIcon={<ArrowForward />}
          onClick={nextBtn}
        >
          Next
        </Button>
      )}
    </Container>
  );
};

export default Pagination;
