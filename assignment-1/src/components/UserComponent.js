import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 800,
    marginLeft: '20px',
  },
  avatar: {
    backgroundColor: red[500],
    width: '75px',
    height: '75px',
  },
  typographyStyles: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
  linkStyles: {
    textDecoration: 'none',
    color: 'black',
  },
});

const UserComponent = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      className={classes.root}
      alignItems="center"
      spacing={4}
      data-test="userComponent"
    >
      <Grid item data-test="avatar">
        <Link to={`/users/${props.id}`} className={classes.linkStyles}>
          <Avatar className={classes.avatar}>{props.username[0]}</Avatar>
        </Link>
      </Grid>
      <Grid item data-test="userInfo">
        <Link to={`/users/${props.id}`} className={classes.linkStyles}>
          {' '}
          <Typography className={classes.typographyStyles}>
            {props.username}
          </Typography>{' '}
        </Link>
        <Typography color="textSecondary">{props.email}</Typography>
      </Grid>
    </Grid>
  );
};

export default UserComponent;
