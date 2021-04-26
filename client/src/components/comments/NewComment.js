import React, { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/outline'
import api from '../../services/api'

export const NewComment = ({ postId, insideCommentId }) => {
  const [comment, setComment] = useState('')

  const onSend = async () => {
    await api.addComment({
      senderId: 2,
      postId,
      comment
    })

    setComment('')
  }

  return (
    <>
    <div className='flex mt-2'>
      <div className='avatar'>
        {'Sachin chouhan'
          .split(' ')
          .map(x => x.charAt(0).toUpperCase())
          .join('')}
      </div>
      <div className='flex-grow flex'>
        <input className='w-full rounded-3xl border-none bg-gray-100 px-2 py-2 my-auto outline-none'
          placeholder='Write your comment here!'
          type='text'
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <ChevronRightIcon className='icon text-white bg-blue-600 h-auto my-auto hover:bg-opacity-75'
          onClick={onSend}
        />
      </div>
    </div>
    </>
  )
}
