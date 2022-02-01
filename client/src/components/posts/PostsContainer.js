import React from 'react';
import { useSelector } from 'react-redux';
import { Posts } from './Posts';

const PostsContainer = () => {
  const { posts } = useSelector(state => state.post);

  return <Posts posts={posts} />;
};

export default PostsContainer;
