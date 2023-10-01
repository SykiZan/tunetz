import React from "react";
import classes from "./MainNav.module.scss";
import Image from "next/image";

const MainNav = () => {
  return (
    <div className={classes.mainWrap}>
      <div className={classes.navMain}>
        <Image
          src={"/arrowBack.svg"}
          width={24}
          height={24}
          alt="logo"
          className={classes.back}
        />
        <Image
          src={"/logoBig.svg"}
          width={442}
          height={36}
          alt="logo"
          className={classes.logo}
        />
        <div className={classes.separator}></div>
        <nav className={classes.nav}>
          <div className={`${classes.navDropdown} ${classes.navItem}`}>
            <Image src={"./location.svg"} width={25} height={24} />
            <div className={classes.option}>Краснодар</div>
            <Image src={"./arrow.svg"} width={9} height={6} />
          </div>
          <div className={`${classes.navItem} ${classes.navItemSelected}`}>
            Акции
          </div>
          <div className={classes.navItem}>О нас</div>
          <div className={classes.navItem}>Доставка</div>
          <div className={classes.navItem}>Контакты</div>
        </nav>
        <div className={classes.phoneBlock}>
          <div className={classes.phone}>8 (999) 000-99-99</div>
          <div className={classes.time}>Прием заказов с 9:00 до 23:00</div>
        </div>
        <Image
          src={"/menu.svg"}
          width={24}
          height={24}
          alt="logo"
          className={classes.menu}
        />
      </div>
    </div>
  );
};

export default MainNav;
