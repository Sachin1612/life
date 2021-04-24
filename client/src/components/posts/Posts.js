import React, { useState, useEffect } from 'react'
import { PostCard } from './PostCard'

export const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
    return () => {

    }
  }, [])

  return (
    <div className="">
      {posts.map(item => (
        <PostCard key={item.id} {...item} />
      ))}
    </div>
  )
}
