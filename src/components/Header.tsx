import React from 'react';
import Link from './Link';
import SignInArea from '../containers/SignInArea';

const Header: React.FCX = () => (
  <header>
    <div className="container mx-auto p-8 flex justify-between h-32">
      <div className="grid grid-flow-col gap-2 items-center">
        <Link href="/">Home</Link>
        <Link href="/post">Post</Link>
        <Link href="/profile">Profile</Link>
      </div>
      <SignInArea />
    </div>
  </header>
);

export default Header;
