import React from 'react';
import {useLocation} from 'react-router-dom';
import HeaderTop from './Layout/HeaderTop/HeaderTop';
import Navbar from './Layout/Navbar/Navbar';

export default function Main() {
  const {hash} = useLocation();

  React.useEffect(() => {
    console.log(hash);
  }, [hash]);

  return (
    <div className="parent">
      <Navbar />
      <HeaderTop />
    </div>
  );
}
