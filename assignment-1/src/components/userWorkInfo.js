import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WorkIcon from '@material-ui/icons/Work';

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
  },

  typographyBodyStyles: {
    fontSize: '16px',
  },
});

function UserWorkInfo({ user }) {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      direction="column"
      spacing={4}
      data-test="userWorkInfoComponent"
    >
      <Grid item>
        <Typography
          className={classes.typographyTitleStyles}
          data-test="header"
        >
          Work
        </Typography>
        <Grid container spacing={1}>
          <Grid item data-test="workIcon">
            {' '}
            <WorkIcon />
          </Grid>
          <Grid item data-test="companyDesc">
            <Typography
              color="textSecondary"
              className={classes.typographyBodyStyles}
            >
              Works at <span className={classes.bold}>{user.company.name}</span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UserWorkInfo;
