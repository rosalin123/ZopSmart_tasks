import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginLeft: '20px',
  },

  typographyTitleStyles: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '16px',
  },

  bold: {
    fontWeight: 'bold',
    color: 'grey',
  },
  typographyBodyStyles: {
    fontSize: '16px',
  },
});

function UserAddress({ user }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column" spacing={4}>
      <Grid item>
        <Typography className={classes.typographyTitleStyles}>
          Address
        </Typography>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <i className="fa fa-home" aria-hidden="true"></i>
          </Grid>
          <Grid item></Grid>{' '}
          <Typography
            color="textSecondary"
            className={classes.typographyBodyStyles}
          >
            Lives in <span className={classes.bold}>{user.address.city}</span>
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <span className={classes.bold}>street:</span> {user.address.street}
          </Grid>
          <Grid item>
            <span className={classes.bold}>suite:</span> {user.address.suite}
          </Grid>
          <Grid item>
            <span className={classes.bold}>city:</span> {user.address.city}
          </Grid>
          <Grid item>
            <span className={classes.bold}>zipcode:</span>{' '}
            {user.address.zipcode}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UserAddress;
