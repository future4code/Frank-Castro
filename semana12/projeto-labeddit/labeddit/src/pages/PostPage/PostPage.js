import React from "react";
import { useHistory, useParams } from "react-router";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import BASE_URL from "../../constants/urls"
import { ScreenContainer, RecipeContainer } from "./styled"
import Typography from '@material-ui/core/Typography'

export const PostPage = () => {
  useProtectedPage()
  const history = useHistory()
  const params = useParams()
  const post = useRequestData({}, `${BASE_URL}/posts/${params.postId}`)
  console.log(post)
  return (
    <div>
      <ScreenContainer>
      {post.post &&
          <RecipeContainer>
              <Typography gutterBottom align={'center'} variant={'h5'} color={'secondaryColor'}>{post.post.title}</Typography>
              <Typography align={'center'}>{post.post.text}</Typography>
          </RecipeContainer>}
      </ScreenContainer>
      
    </div>
  )
}