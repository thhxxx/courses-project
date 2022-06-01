import React from 'react';
import MenuElement from "../elements/header/MenuElement";
import SearchElement from "../elements/header/SearchElement";
import CartElement from "../elements/header/CartElement";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <header className="flex justify-between	gap-x-[30px] items-center my-5">
        <div className="w-[115px]">
          <a href="/">
            <img src="https://htmlstream.com/preview/front-v4.2/html/assets/svg/logos/logo.svg" alt=""/>
          </a>
        </div>
        <MenuElement/>
        <SearchElement/>
        <CartElement/>
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