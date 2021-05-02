import React from "react"
import { useHistory } from "react-router-dom"
import useProtectedPage from "../../hooks/useProtectedPage";
import { PostCard } from "../../componetes/cardPost/cardPost"
import useRequestData from "../../hooks/useRequestData";
import { CardForm } from "../FeedPage/FeedForm"
import BASE_URL from "../../constants/urls"
import { goToPostPage } from "../../routes/coordinator"
import { Body } from "../FeedPage/styled"

export const FeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const posts = useRequestData([], `${BASE_URL}/posts`)
  console.log(posts)

  const onClickPost = (id) => {
    goToPostPage(history, id)
    console.log(id)
  }
  
  const postCards = posts.posts && posts.posts.map((post) => {
    return (
      <PostCard
      key={post.id}
      username={post.username}
      title={post.title}
      text={post.text}
      onClick={() => onClickPost(post.id)}
      />
    )
  })

  return (
    <Body>
          <CardForm/>
          {postCards}
    </Body>
  )
}