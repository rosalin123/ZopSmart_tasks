import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  typographyStyles: { fontSize: '25px', fontWeight: 'bold' },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center">
      <AppBar position="static">
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Typography className={classes.typographyStyles}>
                Connect
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={10}>
                <Grid item>
                  <Button color="inherit" to="/" component={Link}>
                    <HomeIcon />
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="inherit" to="/users" component={Link}>
                    <PeopleIcon />
                  </Button>
                </Grid>
                <Grid item>
                  {' '}
                  <Button color="inherit" to="/albums" component={Link}>
                    <PhotoAlbumIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <AcUnitRoundedIcon />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
