import React from "react";
import style from "./Nav.module.scss";
import { Link } from "react-scroll";

export const Nav = () => {
  return (
    <div className={style.navStyle}>
      <span>
        <Link
          to="home"
          activeClass={style.activeStyle}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Home
        </Link>
      </span>
      <span>
        <Link
          to="skills"
          activeClass={style.activeStyle}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Skills
        </Link>
      </span>
      <span>
        <Link
          to="myWorks"
          activeClass={style.activeStyle}
          spy={true}
          smooth={true}
          offset={-180}
          duration={600}
        >
          Works
        </Link>
      </span>
      <span>
        <Link
          to="contacts"
          activeClass={style.activeStyle}
          spy={true}
          smooth={true}
          offset={-99}
          duration={700}
        >
          Contacts
        </Link>
      </span>
    </div>
  );
};
