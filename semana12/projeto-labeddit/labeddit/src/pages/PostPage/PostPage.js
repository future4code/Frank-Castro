import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import BASE_URL from "../../constants/urls"
import { ScreenContainer, RecipeContainer, CardComment } from "./styled"
import down from "../../imgs/down.png"
import downAlt from "../../imgs/downAlt.png"
import up from "../../imgs/up.png"
import upAlt from "../../imgs/upAlt.png"
import Typography from '@material-ui/core/Typography'
import axios from "axios"

export const PostPage = () => {
  useProtectedPage()

  const formDefault = {text: ""}
  const history = useHistory()
  const [form, setForm] = useState(formDefault)
  const params = useParams()
  const [post, setPosts] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPostDetails()
  }, [])

  const getPostDetails = async () => {

    const headers = {headers: {Authorization: window.localStorage.getItem("token")}}

    try {
        const response = await axios.get(`${BASE_URL}/posts/${params.postId}`, headers)
        setPosts(response.data.post)
        setLoading(false)
    }
    catch (error) {
        console.log(error)
    }
}

const onChange = (event) => {
  const {name, value} = event.target
  setForm({...form, [name]: value})
}

const createComment = async (event) => {

  event.preventDefault()

  const headers = {headers: {Authorization: window.localStorage.getItem("token")}}

  try {
      await axios.post(`${BASE_URL}/posts/${params.postId}/comment`, form, headers)
      window.alert("Comentário Criado com Sucesso!")
      getPostDetails()
      setForm(formDefault)
  }
  catch(error) {
      console.log(error)
  }
}

  const votePost = async (postId, direction) => {

    const headers = {headers: {Authorization: window.localStorage.getItem("token")}}

    try {
        await axios.put(`${BASE_URL}/posts/${postId}/vote`, {direction}, headers)
        getPostDetails()
    }
    catch (error) {
        console.log(error)
      }
    }

    const voteComment = async (commentId, direction) => {

      const headers = {headers: {Authorization: window.localStorage.getItem("token")}}

      try {
          await axios.put(`${BASE_URL}/posts/${params.postId}/comment/${commentId}/vote`, {direction}, headers)
          getPostDetails()
      }
      catch (error) { 
          console.log("error")
        }
      }

  return (
    <div>
      <ScreenContainer>
      {post &&
          <RecipeContainer>
              <Typography gutterBottom align={'center'} variant={'h5'} color={'secondaryColor'}>{post.title}</Typography>
              <Typography align={'center'}>{post.text}</Typography>
              <p>
              {post.userVoteDirection === 1 ? <img src={upAlt} onClick={() => votePost(post.id, 0)}/> : <img src={up} onClick={() => votePost(post.id, 1)}/>}
              {post.votesCount}
              {post.userVoteDirection === -1 ? <img src={downAlt} onClick={() => votePost(post.id, 0)}/> : <img src={down} onClick={() => votePost(post.id, -1)}/>}
              {!loading && <form onSubmit={createComment}>
                <input name="text" type="text" value={form.text} onChange={onChange} placeholder="Comentário" required/>
                <button>Comentar</button><hr/>
              </form>}

              </p>
              {post.comments && post.comments.map((comment) => {
              return <div key={comment.id}>
                  <h1>{comment.username}: {comment.text}</h1>
                  <p>
                    {comment.userVoteDirection === 1 ? <img src={upAlt} onClick={() => voteComment(comment.id, 0)}/> : <img src={up} onClick={() => voteComment(comment.id, 1)}/>}
                        {comment.votesCount}
                    {comment.userVoteDirection === -1 ? <img src={downAlt} onClick={() => voteComment(comment.id, 0)}/> : <img src={down} onClick={() => voteComment(comment.id, -1)}/>}
                  </p>
                  <hr/>
                  </div>
              })}
          </RecipeContainer>}
      </ScreenContainer>
      
    </div>
  )
}