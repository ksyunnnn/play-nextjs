import React from 'react';
import Header from './Header';

const Layout: React.FCX<{
  title?: string
}> = ({ children, title = '', ...props }) => (
  <>
    <Header {...props} />
    <main className="container mx-auto p-8 min-h-1/4">
      <h1 className="text-4xl pb-8">{title}</h1>
      {children}
    </main>
  </>
);

export default Layout;
