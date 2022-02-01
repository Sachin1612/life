import React from 'react'
import { PostCard } from './PostCard'
import { NewPost } from './NewPost'

export const Posts = ({ posts }) => {
  return (
    <div className="">
      <NewPost />
      {posts.map(item => (
        <PostCard key={item.id} {...item} />
      ))}
    </div>
  )
}
