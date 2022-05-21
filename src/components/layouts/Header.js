import React from 'react';
import Menu from "../elements/Menu";
import Search from "../elements/Search";
import Cart from "../elements/Cart";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <header className="flex justify-between	gap-x-[30px] items-center my-5">
        <div className="w-[115px]">
          <img src="https://htmlstream.com/preview/front-v4.2/html/assets/svg/logos/logo.svg" alt=""/>
        </div>
        <Menu/>
        <Search/>
        <Cart/>
        <Link to="/login">
          <button className="button">
            get started
          </button>
        </Link>
      </header>
    </div>
  );
};

export default Header;