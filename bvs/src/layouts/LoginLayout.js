import Header from './../components/LoginHeader';
import Footer from './../components/Footer';
import React from 'react'

import { Outlet } from 'react-router-dom';

function LoginLayout() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer/>
    </>
  );
}

export default LoginLayout;
