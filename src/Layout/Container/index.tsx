'use client';

import React from 'react';

import Footer from './Components/Footer';
import Header from './Components/Header';

function Container({ children, header }: any) {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) return null;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Container;
