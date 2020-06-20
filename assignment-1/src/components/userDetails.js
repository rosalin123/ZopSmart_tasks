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
  },

  typographyBodyStyles: {
    fontSize: '16px',
  },
});

function UserDetails({ user }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column" spacing={2}>
      <Grid item>
        <Typography className={classes.typographyTitleStyles}>Name</Typography>
        <Typography
          color="textSecondary"
          className={classes.typographyBodyStyles}
        >
          {user.name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.typographyTitleStyles}>
          Username
        </Typography>
        <Typography
          color="textSecondary"
          className={classes.typographyBodyStyles}
        >
          {user.username}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.typographyTitleStyles}>Email</Typography>
        <Typography
          color="textSecondary"
          className={classes.typographyBodyStyles}
        >
          {user.email}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default UserDetails;
