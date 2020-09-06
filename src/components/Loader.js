import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = (props) => {
  return (
    <div className="loader">
      <span>
        <CircularProgress />
      </span>
    </div>
  );
};

export default Loader;
