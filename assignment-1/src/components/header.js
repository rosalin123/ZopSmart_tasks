import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  typographyStyles: { flex: 1, fontSize: '25px', fontWeight: 'bold' },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center">
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.typographyStyles}>Connect</Typography>
          <AcUnitRoundedIcon />
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
