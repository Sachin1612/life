import React from 'react'
import { ThumbUpIcon, HeartIcon } from '@heroicons/react/solid'
import { ThumbUpIcon as ThumbUpIconOutline, ChatIcon, ShareIcon } from '@heroicons/react/outline'

export const PostCard = ({
  sender,
  body,
  likes,
  attachments,
  comments
}) => {
  return (

    <div className="bg-white rounded-lg shadow-md mb-4">
      <div className='p-4'>
        <div className='flex pb4'>
          <div className='avatar'>
            {sender
              .split(' ')
              .map(x => x.charAt(0).toUpperCase())
              .join('')}
          </div>
          <div className='my-auto'>{sender}</div>
        </div>
        <div>{body.substring(0, 100)}</div>
      </div>
      <Attachements attachments={attachments} />
      <div className='p-2'>
        <div className='flex pb-2 border-b'>
          <div className='flex flex-grow'>
            <ThumbUpIcon className='text-white bg-blue-600 icon' />
            <HeartIcon className='text-white bg-red-600 icon' />
            <span className='ml-2'>{likes}</span>
          </div>

          <div className='flex-shrink-0'>
            {comments.length} comments
          </div>
        </div>
        <div className='flex p-1 border-b'>
          <div className="flex-1 flex hover:bg-gray-200 rounded-lg py-2">
            <div className='m-auto'>
              <ThumbUpIconOutline className='icon ' />
              Like
            </div>
          </div>
          <div className="flex-1 flex hover:bg-gray-200 rounded-lg py-2">
            <div className='m-auto'>
              <ChatIcon className='icon' />
            Comment
            </div>
          </div>
          <div className="flex-1 flex hover:bg-gray-200 rounded-lg py-2">
            <div className='m-auto'>
              <ShareIcon className='icon' />
            Share
            </div>
          </div>
        </div>

        <div className=''>
          {comments.map(c => (
            <div>
              {c.comment}
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

const Attachements = ({ attachments }) => {
  return (
    <div className='flex my-auto bg-gray-700'>
      {attachments.length === 0 ?
        <div />
        : attachments.map(url => <img className='m-auto' src={`./img/${url}`} alt='attachment' />)
      }
    </div>

  )
}
