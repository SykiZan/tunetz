import React from "react";

import classes from "./Card.module.scss";
import Image from "next/image";

const Card = () => {
  return (
    <div className={classes.wrapper}>
      <Image
        src={"/rolls.png"}
        width={188}
        height={236}
        className={classes.image}
      />
      <div className={classes.cardRight}>
        <header className={classes.header}>
          Скидка 10% в день <br /> рождения
        </header>
        <div className={classes.description}>
          Акция не распространяется на сеты, комбо наборы, нагетсы, фри.
        </div>
        <button className={classes.button}>Посмотреть</button>
      </div>
    </div>
  );
};

export default Card;
