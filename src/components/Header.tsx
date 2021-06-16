import React from 'react';
import Link from './Link';
import SignInArea from '../containers/SignInArea';

const getGreeting = () => {
  const thehours = new Date().getHours();
  const morning = 'Good morning';
  const afternoon = 'Good afternoon';
  const evening = 'Good evening';

  if (thehours >= 0 && thehours < 12) {
    return morning;
  } if (thehours >= 12 && thehours < 17) {
    return afternoon;
  } if (thehours >= 17 && thehours < 24) {
    return evening;
  }
  return '';
};

const Header: React.FCX = () => (
  <header>
    <div className="container mx-auto p-8 flex justify-between h-32">
      <div className="grid grid-flow-col gap-2 items-center">
        <span className="font-bold mr-8">{getGreeting()}</span>
        <Link href="/">Home</Link>
        <Link href="/post">Post</Link>
        <Link href="/profile">Profile</Link>
      </div>
      <SignInArea />
    </div>
  </header>
);

export default Header;
