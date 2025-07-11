import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        <Typography variant="h6">YouTube Clone</Typography>
      </Link>
    </Toolbar>
  </AppBar>
);

export default Navbar;
