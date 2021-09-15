import React from "react";
import style from "./Skills.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import { Skill } from "./skill/Skill";
import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

export const Skills = () => {
  return (
    <div className={style.skillsBlock} id={"skills"}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>My Skills</h2>
        <div className={style.skills}>
          <Skill background={"orangered"} icon={faHtml5} title={"HTML"} />
          <Skill background={"blue"} icon={faCss3} title={"CSS"} />
          <Skill background={"orange"} icon={faJs} title={"JavaScript"} />
          <Skill background={"cyan"} icon={faReact} title={"React & Redux"} />

          <Skill background={"violet"} icon={faSass} title={"SASS"} />
          <Skill background={"dodgerblue"} title={"TypeScript"} />
        </div>
      </div>
    </div>
  );
};
