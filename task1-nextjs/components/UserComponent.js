import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Link from 'next/link';

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
      key={props.id}
      container
      direction="row"
      className={classes.root}
      alignItems="center"
      spacing={4}
      data-test="userComponent"
    >
      <Grid item data-test="avatar">
        <Avatar className={classes.avatar}>{props.username[0]}</Avatar>
      </Grid>
      <Grid item data-test="userInfo">
        <div>
          <Link href="/users">
            <a className={classes.linkStyles}>
              {' '}
              <Typography className={classes.typographyStyles}>
                {props.username}
              </Typography>{' '}
            </a>
          </Link>
          <Typography color="textSecondary">{props.email}</Typography>{' '}
        </div>
      </Grid>
    </Grid>
  );
};

export default UserComponent;
