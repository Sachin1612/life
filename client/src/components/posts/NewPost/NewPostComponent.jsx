import React, { useState } from 'react'
import { VideoCameraIcon, PhotographIcon, EmojiHappyIcon } from '@heroicons/react/outline'

export const NewPostComponent = ({ addPost }) => {
  const [body, setBody] = useState('')

  const addPostEvent = () => {
    debugger
    addPost({
      senderId: 2,
      body
    })

    setBody('')
  }

  return (
    <>
    <div className='card p-4'>
      <div className='flex'>
        <div className='avatar'>
          {'Sachin chouhan'
            .split(' ')
            .map(x => x.charAt(0).toUpperCase())
            .join('')}
        </div>
        <div className='flex-grow'>
          <textarea className='w-full rounded-3xl border-none bg-gray-100 px-2 py-1'
          value={body}
          onChange={e => setBody(e.target.value)} />
        </div>
      </div>
      <div className='flex py-1 border-t'>
        <div className="flex-1 flex hover:bg-gray-200 rounded-lg py-2">
          <div className='m-auto'>
            <VideoCameraIcon className='icon' />
            Live video
          </div>
        </div>
        <div className="flex-1 flex hover:bg-gray-200 rounded-lg py-2">
          <div className='m-auto'>
            <PhotographIcon className='icon' />
            Photo/Video
          </div>
        </div>
        <div className="flex-1 flex hover:bg-gray-200 rounded-lg py-2">
          <div className='m-auto'>
            <EmojiHappyIcon className='icon' />
            Feeling
          </div>
        </div>
      </div>
      <div className='flex border-t'>
        <button
          className='btn btn-primary'
          onClick={addPostEvent}
        >
          Post
        </button>
      </div>
    </div>
    </>
  )
}
