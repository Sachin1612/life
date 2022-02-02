import React from 'react';
import { NewPost } from 'components/posts';
import { useSelector } from 'react-redux';
import { PostCard } from 'components/posts/PostCard';

export const Dashboard = () => {
  const { posts } = useSelector(state => state.post);

  return <div className="">
    <NewPost />
    {posts.map(item => <PostCard key={item.id} {...item} />)};
  </div>
};
