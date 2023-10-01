import React from "react";

import classes from "./MenuNav.module.scss";
import Image from "next/image";

const MenuNav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.navItems}>
        <div className={classes.navItem}>Комбо наборы</div>
        <div className={classes.navItem}>Пицца</div>
        <div className={classes.navItem}>Роллы</div>
        <div className={classes.navItem}>Суши</div>
        <div className={classes.navItem}>Сеты</div>
        <div className={classes.navItem}>Вок и закуски</div>
        <div className={classes.navItem}>Салаты</div>
        <div className={classes.navItem}>Десерты</div>
        <div className={classes.navItem}>Напитки</div>
        <div className={classes.navItem}>Дополнительно</div>
      </div>
      <Image
        src={"./search.svg"}
        width={26}
        height={26}
        className={classes.search}
      />
      <div className={classes.separator}></div>
      <div className={classes.navControlls}>
        <div className={classes.cart}>
          <Image
            src={"/count.svg"}
            width={25}
            height={18}
            alt="cart"
            className={classes.count}
          />
          <Image src={"/cart.svg"} width={24} height={26} alt="cart" />
          <div className={classes.value}>1 089₽</div>
        </div>
        <div className={classes.user}>
          <Image src={"/user.svg"} width={26} height={27} alt="cart" />
          <div className={classes.value}>
            174
            <Image src={"/lightning.svg"} width={17} height={18} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuNav;
