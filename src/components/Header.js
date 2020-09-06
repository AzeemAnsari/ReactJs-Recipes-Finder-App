import React from 'react';

import { AppBar, IconButton, Container, Toolbar } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const Header = ({ logo }) => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <div className="logo">
              <img src={logo} alt="azeem ansari" />
            </div>
            <div>
              <IconButton
                href="https://github.com/AzeemAnsari"
                target="_blank"
                color="inherit"
              >
                <GitHubIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
