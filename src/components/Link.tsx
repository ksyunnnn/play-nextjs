/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink, { LinkProps } from 'next/link';
import React from 'react';

const Link: React.FCX<LinkProps> = ({ children, ...props }) => (
  <NextLink {...props}>
    <a className="transition py-2 px-4 rounded-md hover:text-gray-500">{children}</a>
  </NextLink>
);

export default Link;
