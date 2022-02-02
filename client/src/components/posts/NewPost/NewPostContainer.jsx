import React from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from 'redux/slices/postSlice';
import { NewPostComponent } from 'components/posts/NewPost/NewPostComponent';

export default function NewPostContainer() {
  const dispatch = useDispatch();

  return <NewPostComponent addPost={x => dispatch(addPost(x))} />;
};
