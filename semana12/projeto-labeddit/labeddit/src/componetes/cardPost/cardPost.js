import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from "react-router";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { PostCardConteiner } from './styled';
import down from "../../imgs/down.png"
import downAlt from "../../imgs/downAlt.png"
import up from "../../imgs/up.png"
import upAlt from "../../imgs/upAlt.png"
import BASE_URL from "../../constants/urls"
import axios from "axios"

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
  const params = useParams()
  const [post, setPosts] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {

    const headers = {headers: {Authorization: window.localStorage.getItem("token")}}
    
    try {
        const response = await axios.get(`${BASE_URL}/posts`, headers)
        setPosts(response.data.posts)
        setLoading(false)
    }
    catch (error) {
        console.log(error)
    }
}

const votePost = async (postId, direction) => {

  const headers = {headers: {Authorization: window.localStorage.getItem("token")}}

  try {
      await axios.put(`${BASE_URL}/posts/${postId}/vote`, {direction}, headers)
      getPosts()
  }
  catch (error) {
      console.log(error)
  }
}


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
          {post.userVoteDirection === 1 ? <img src={upAlt} onClick={() => votePost(post.id, 0)}/> : <img src={up} onClick={() => votePost(post.id, 1)}/>}
            {post.votesCount}
          {post.userVoteDirection === -1 ? <img src={downAlt} onClick={() => votePost(post.id, 0)}/> : <img src={down} onClick={() => votePost(post.id, -1)}/>}
        </CardActions>
        </Card>
    </PostCardConteiner>
  );
}

