import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
//import img_avatar from '../images/maxresdefault.jpg';

const userStyles = makeStyles({
  divStyles: {
    width: 200,
    height: 140,
    //backgroundImage:
    // 'url(/home/rosy/ZopSmart_tasks/assignment-1/src/images/maxresdefault.jpg)',
    background: 'blue',
    borderRadius: 4,
    padding: 10,
  },
  albumStyles: {
    width: 200,
  },
  typograpgyStyles: {
    color: 'white',
    fontFamily: 'Satisfy, cursive',
    marginLeft: 10,
  },
  iconStyles: {
    fontSize: '20px',
    color: 'white',
  },
});

const Album = (props) => {
  const classes = userStyles();

  return (
    <Grid Container className={classes.albumStyles}>
      <Grid item className={classes.divStyles}>
        <Link to={`/photos/${props.id}`}>
          <FontAwesomeIcon
            icon={faCameraRetro}
            className={classes.iconStyles}
          />
          <span className={classes.typograpgyStyles}>Your gallery</span>
        </Link>
      </Grid>
      <Grid item>
        <Typography>{props.title}</Typography>
      </Grid>
      <Grid item>
        <Typography color="textSecondary">{props.username}</Typography>
      </Grid>
    </Grid>
  );
};

export default Album;
