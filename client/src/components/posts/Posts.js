import React, { useState, useEffect } from 'react'
import { PostCard } from './PostCard'
import { NewPost } from './NewPost'
import api from '../../services/api'

export const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.getPosts().then(res => setPosts(res))
  }, [])

  return (
    <div className="">
      <NewPost />
      {posts.map(item => (
        <PostCard key={item.id} {...item} />
      ))}
    </div>
  )
}
