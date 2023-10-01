import React from "react";

import classes from "./Footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.main}>
        <div className={classes.column}>
          <h3 className={classes.navHeader}>Навигация</h3>
          <nav className={classes.nav}>
            <div className={classes.navItem}>Акции</div>
            <div className={classes.navItem}>О нас</div>
            <div className={classes.navItem}>Доставка</div>
            <div className={classes.navItem}>Контакты</div>
            <div className={classes.navItem}>Правовая информация</div>
          </nav>
        </div>
        <div className={classes.column}>
          <div className={classes.infoBlock}>
            <div className={classes.infoSmall}>Заказывайте по телефону</div>
            <div className={classes.infoBig}>+7 (999) 999-99-99</div>
          </div>
          <div className={`${classes.infoBlock} ${classes.infoBlockHours}`}>
            <div className={classes.infoSmall}>Доставка работает</div>
            <div className={classes.infoBig}>с 10:30 до 23:30</div>
          </div>
          <Image
            src={"/vk.svg"}
            width={40}
            height={33}
            className={classes.vk}
          />
        </div>
        <div className={`${classes.column} ${classes.columnLast} `}>
          <Image
            src={"/logoBig.svg"}
            width={311}
            height={25}
            className={classes.logo}
          />
          <div className={classes.infoSmall}>
            Любимые блюда в приложении!
            <div style={{ textAlign: "right" }}>Скачай сейчас!</div>
          </div>
          <div className={classes.download}>
            <Image src={"/google.svg"} width={140} height={40} />
            <Image src={"/apple.svg"} width={140} height={40} />
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        2023 © «Джонни Тунец» - Новая волна вкуса
      </div>
    </footer>
  );
};

export default Footer;
