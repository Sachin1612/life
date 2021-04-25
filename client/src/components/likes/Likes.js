import { HeartIcon, ThumbUpIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'

export const Likes = ({ postId }) => {
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    api.getLikes(postId).then(res => setLikes(res.length))
  }, [postId])
  
  return (
    likes > 0 && (
    <>
      <ThumbUpIcon className='text-white bg-blue-600 icon' />
      <HeartIcon className='text-white bg-red-600 icon' />
      <span className='ml-2'>{likes}</span>
    </>
  ))
}
