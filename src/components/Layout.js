import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { useLocation } from "react-router-dom";

const Layout = (props) => {
  const location  = useLocation();
  const { pathname = '' } = location;
  return (
    <div className="pt-wrapper" style={{height: pathname === '/' && '100vh'}}>
      <Menu />
        {props.children}
      <Footer />
    </div>
  )
}

export default Layout;
