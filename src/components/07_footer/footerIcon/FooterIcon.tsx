import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

let style = require("../Footer.module.scss");

type FooterIconType = {
  icon: IconProp;
  link: string;
};

export const FooterIcon: React.FC<FooterIconType> = ({ icon, link }) => {
  return (
    <a href={link}>
      <FontAwesomeIcon icon={icon} className={style.square}></FontAwesomeIcon>
    </a>
  );
};
