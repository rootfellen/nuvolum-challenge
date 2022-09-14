import React from "react";
import style from "./Header.module.scss";

const Header = ({ title, subtitle }) => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.subtitle}>{subtitle}</p>
    </header>
  );
};

export default Header;
