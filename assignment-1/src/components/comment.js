import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
});

const Comment = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>{props.name}</h3>
      <Typography color="textSecondary" className={classes.typographyStyles}>
        {props.body}
      </Typography>
    </div>
  );
};

export default Comment;
