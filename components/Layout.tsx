import { Session } from 'next-auth';
import React from 'react';
import Header from './Header';

const Layout: React.FCX<{session: Session, loading: boolean }> = ({ children, ...props }) => (
  <>
    <Header {...props} />
    <main className="container mx-auto px-4000">{children}</main>
  </>
);

export default Layout;
