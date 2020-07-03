import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Avatar, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: '#eceff1',
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '15px',
  },

  typographyStyles: {
    fontSize: '14px',
  },

  usernameStyles: {
    fontSize: '14px',
    color: '#2F4F4F	 ',
    fontWeight: 'bold',
  },

  avatar: {
    backgroundColor: '#1a237e',
    color: 'white',
  },
});

const Comment = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root} data-test="comment">
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={1}
        data-test="avatar"
      >
        <Grid item>
          <Avatar className={classes.avatar}>{props.email[0]}</Avatar>
        </Grid>
        <Grid item>
          <Typography className={classes.usernameStyles}>
            {props.email}
          </Typography>
        </Grid>
      </Grid>
      <h4 data-test="name">{props.name}</h4>
      <Typography
        color="textSecondary"
        className={classes.typographyStyles}
        data-test="body"
      >
        {props.body}
      </Typography>
    </div>
  );
};

export default Comment;
