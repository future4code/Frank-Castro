import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { PostCardConteiner } from './styled';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 240,
  },
});

export const PostCard = (props) => {
  const classes = useStyles();

  return (
    <PostCardConteiner> 
        <Card className={classes.root}>
        <CardActionArea 
        onClick={props.onClick}
        >
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {props.username}
            </Typography>
            <hr/>
            <Typography gutterBottom variant="h5" component="h2">
            {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
    </PostCardConteiner>
  );
}

