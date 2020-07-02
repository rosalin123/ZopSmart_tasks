import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  typographyStyles: { fontSize: '25px', fontWeight: 'bold' },
  button: {
    color: 'white',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" data-test="headerComponent">
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
                  <Link href="/">
                    <a>
                      <Button className={classes.button} data-test="homeButton">
                        <HomeIcon />
                      </Button>
                    </a>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/users">
                    <a>
                      <Button
                        className={classes.button}
                        data-test="allUserButton"
                      >
                        <PeopleIcon />
                      </Button>
                    </a>
                  </Link>
                </Grid>
                <Grid item>
                  {' '}
                  <Link href="/">
                    <a>
                      <Button
                        className={classes.button}
                        data-test="albumButton"
                      >
                        <PhotoAlbumIcon />
                      </Button>
                    </a>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item data-test="roundIcon">
              <AcUnitRoundedIcon />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Navbar;
