import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  loaderContainerStyles: {
    width: '100vw',
    height: '90vh',
  },
  loaderStyles: {
    fontSize: '15px',
    text: 'center',
    color: '#000066',
  },
}));

function Loader() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.loaderContainerStyles}
      alignItems="center"
      justify="center"
      data-test="loader"
    >
      <Grid item className={classes.loaderStyles} data-test="spinner">
        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
      </Grid>
      <Grid item data-test="loadingMessage">
        Loading...
      </Grid>
    </Grid>
  );
}

export default Loader;
