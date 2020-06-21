import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Comment from './comment';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 800,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardHeaderStyles: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
  cardContentTitleStyles: {
    fontWeight: 'bold',
    fontSize: '16px',
    marginBottom: '10px',
    marginTop: '30px',
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  linkStyles: {
    textDecoration: 'none',
  },
}));

function PostComponent(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} data-test="postDetails">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.user.username ? props.user.username[0] : ''}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <p
            style={{ margin: '0', padding: '0' }}
            className={classes.cardHeaderStyles}
          >
            {props.user.username}
          </p>
        }
        subheader="September 14, 2016"
        data-test="postHeader"
      />

      <CardContent data-test="postBody">
        {' '}
        <Link
          to={`/posts/${props.id}`}
          className={classes.linkStyles}
          data-test="postLink"
        >
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            className={classes.cardContentTitleStyles}
            data-test="postTitle"
          >
            {props.title}
          </Typography>
        </Link>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          data-test="postContent"
        >
          {props.body}
        </Typography>
        {props.comments ? (
          <Grid container data-test="postComments">
            <Grid item>
              <Typography className={classes.cardContentTitleStyles}>
                {' '}
                Comments{' '}
              </Typography>
            </Grid>
            {props.comments.map((comment, index) => {
              return (
                <Grid item key={index}>
                  <Comment
                    name={comment.name}
                    body={comment.body}
                    email={comment.email}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          ''
        )}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostComponent;
