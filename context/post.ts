import React, { createContext, useContext, useState } from 'react';

type Post = {
  text: string;
  point: number;
  size: 'small' | 'medium' | 'large';
}

export const PostContext = createContext<
{state: Post, setState: React.Dispatch<React.SetStateAction<Post>>}>(null);

export const usePostState = () => {
  const [state, setState] = useState<Post>({
    text: '',
    point: 1,
    size: 'medium',
  });

  return {
    state, setState,
  };
};
export const usePostContext = () => useContext(PostContext);
