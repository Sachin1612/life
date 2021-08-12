import { HeartIcon, ThumbUpIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'

export const Comments = ({ postId }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    try {
      api.getComments(postId).then(res => {
        console.log('COMMENTS', res)
        setComments(res)
      })
    } catch (e) {
      debugger
      console.log(e)
    }
  }, [postId])
  
  return (
    comments.map(c => (
      <div key={c.id} className='flex mt-2'>
        <div className='avatar '>
          {'S A'
            .split(' ')
            .map(x => x.charAt(0).toUpperCase())
            .join('')}
        </div>
        <div className='my-auto'>{c.comment}</div>
      </div>
    ))
  )
}
