import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginLeft: '20px',
  },

  typographyTitleStyles: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '10px',
  },

  typographyBodyStyles: {
    fontSize: '16px',
  },
});

function UserContactInfo({ user }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column" spacing={4}>
      <Grid item>
        <Typography className={classes.typographyTitleStyles}>
          Contact Info
        </Typography>

        <Grid container spacing={1}>
          <Grid item>
            <PhoneIcon />
          </Grid>
          <Grid item>
            <Typography
              color="textSecondary"
              className={classes.typographyBodyStyles}
            >
              {user.phone}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item>
            <EmailIcon />
          </Grid>
          <Grid item>
            <Typography
              color="textSecondary"
              className={classes.typographyBodyStyles}
            >
              {user.email}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography className={classes.typographyTitleStyles}>
          Website and Links
        </Typography>
        <Grid container spacing={1}>
          <Grid item>
            <LinkIcon />
          </Grid>
          <Grid item>
            <Typography
              color="textSecondary"
              className={classes.typographyBodyStyles}
            >
              {user.website}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UserContactInfo;
