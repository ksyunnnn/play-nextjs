import React from 'react';
import { PostContext, usePostState } from './post';

const Provider: React.FCX = ({ children }) => {
  const postContextState = usePostState();
  return (
    <PostContext.Provider
      value={postContextState}
    >
      {children}
    </PostContext.Provider>
  );
};

export default Provider;
