import React from 'react';
import { Typography, Link } from '@material-ui/core';

const Footer = () => {
  return (
    <footer align="center">
      <Typography align="center" variant="body2">
        &copy; 2020 -{' '}
        <Link href="https://www.azeemansari.me" target="_blank" color="inherit">
          Azeem Ansari
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
