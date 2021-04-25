import React from 'react'
import { ThumbUpIcon as ThumbUpIconOutline, ChatIcon, ShareIcon } from '@heroicons/react/outline'
import { Likes } from '../likes/Likes'
import api from '../../services/api'

export const PostCard = ({
  id,
  sender,
  body,
  likes,
  attachments,
  comments
}) => {

  const addLike = async () => {
    const res = await api.addLike(id);
    console.log(res)
  }

  return (
    <div className="card">
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
            <Likes postId={id} />
          </div>

          <div className='flex-shrink-0'>
            {comments.length} comments
          </div>
        </div>
        <div className='flex p-1 border-b'>
          <div className="flex-1 flex hover:bg-gray-200 rounded-lg py-2">
            <div className='m-auto' onClick={addLike}>
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
