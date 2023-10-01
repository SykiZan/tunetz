import React from "react";
import MainNav from "./MainNav/MainNav";
import MenuNav from "./MenuNav/MenuNav";

import classes from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <MainNav />
      <MenuNav />
    </nav>
  );
};

export default Nav;
