import React from 'react';
import Header from "../components/layouts/Header";
import {Outlet} from "react-router-dom";
import Footer from "../components/layouts/Footer";

const DefaultLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default DefaultLayout;