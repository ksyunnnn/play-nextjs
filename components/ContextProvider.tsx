import React, { createContext, useState } from 'react';

type Post = {
  text: string;
  point: number;
  size: 'small' | 'medium' | 'large';
}

export const PostContext = createContext<
{state: Post, setState: React.Dispatch<React.SetStateAction<Post>>}>(null);

const ContextProvider: React.FCX = ({ children }) => {
  const [post, setPost] = useState<Post>({
    text: '',
    point: 1,
    size: 'medium',
  });

  return (
    <PostContext.Provider
      value={{
        state: post,
        setState: setPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default ContextProvider;
