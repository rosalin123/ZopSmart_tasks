import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import UserDetails from './userDetails';
import UserWorkInfo from './userWorkInfo';
import UserAddress from './userAddress';
import UserContactInfo from './UserContactInfo';

const styles = {
  root: {
    width: 800,
  },

  aboutStyles: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
    marginLeft: '8px',
  },
  borderStyles: {
    paddingRight: '16px',
    borderRight: '1px solid grey',
  },
  buttonStyles: {
    color: '#65676b',
    width: '100%',
    paddingLeft: '0px',
  },

  hoverStyles: {
    '&:hover': {
      background: '#f0f2f5',
    },
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class About extends Component {
  state = { details: true, work: false, places: false, contact: false };

  handleClick = (input) => {
    input === 'details'
      ? this.setState({
          details: true,
          work: false,
          places: false,
          contact: false,
        })
      : input === 'work'
      ? this.setState({
          details: false,
          work: true,
          places: false,
          contact: false,
        })
      : input === 'places'
      ? this.setState({
          details: false,
          work: false,
          places: true,
          contact: false,
        })
      : this.setState({
          details: false,
          work: false,
          places: false,
          contact: true,
        });
  };

  render() {
    const { classes } = this.props;
    const { user } = this.props;

    return (
      <Card className={classes.root} variant="outlined" data-test="About">
        <CardContent>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={4}
              className={classes.borderStyles}
              data-test="buttons"
            >
              <Grid container direction="column">
                <Grid item data-test="header">
                  <Typography className={classes.aboutStyles}>About</Typography>
                </Grid>
                <Grid item className={classes.hoverStyles}>
                  <Button
                    className={classes.buttonStyles}
                    onClick={() => this.handleClick('details')}
                    data-test="detailsButton"
                  >
                    Details About {user.username}{' '}
                  </Button>
                </Grid>
                <Grid item className={classes.hoverStyles}>
                  <Button
                    className={classes.buttonStyles}
                    onClick={() => this.handleClick('work')}
                    data-test="workDetailsButton"
                  >
                    Work{' '}
                  </Button>
                </Grid>
                <Grid item className={classes.hoverStyles}>
                  <Button
                    className={classes.buttonStyles}
                    onClick={() => this.handleClick('places')}
                    data-test="addressButton"
                  >
                    Address
                  </Button>
                </Grid>
                <Grid item className={classes.hoverStyles}>
                  <Button
                    className={classes.buttonStyles}
                    onClick={() => this.handleClick('contacts')}
                    data-test="contactInfoButton"
                  >
                    Contact Details
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={8} data-test="details">
              {this.state.details ? (
                <UserDetails user={user} data-test="UserDetailsComponent" />
              ) : this.state.work ? (
                <UserWorkInfo user={user} data-test="UserWorkInfoComponent" />
              ) : this.state.places ? (
                <UserAddress user={user} data-test="UseAddressComponent" />
              ) : (
                <UserContactInfo
                  user={user}
                  data-test="UserContactInfoComponent"
                />
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}
export default withStyles(styles)(About);
