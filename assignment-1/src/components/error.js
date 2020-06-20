import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  loaderContainerStyles: {
    width: '100vw',
    height: '90vh',
    color: '#C91616',
    fontSize: '20px',
    fontFamily: 'Quattrocento',
  },
  loaderStyles: {
    fontSize: '25px',
    text: 'center',
    color: '#C91616',
  },
}));

function ErrorComponent(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.loaderContainerStyles}
      alignItems="center"
      justify="center"
      spacing={1}
    >
      <Grid item className={classes.loaderStyles}>
        <i className="fa fa-meh-o" aria-hidden="true"></i>
      </Grid>
      <Grid item>Oops! {props.message}..</Grid>
    </Grid>
  );
}

export default ErrorComponent;
