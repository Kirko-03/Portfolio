import React from "react";
import style from "./MyWorks.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import Work from "./Work/Work";
import socNet from "../../assets/img/socnet.jpg";
import todolist from "../../assets/img/todolist2.png";
import counter from "../../assets/img/counter.jpg"

export const MyWorks = () => {
  const socNetImg = socNet;
  const todolistImg = todolist;
  return (
    <div className={style.myWorksBlock}>
      <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
        <h2 className={style.title}>My Works</h2>
        <div className={style.block}>
          <Work
            background={socNetImg}
            title={"Social Network"}
            site="https://kirko-03.github.io/social-network"
          />
          <Work
            background={todolistImg}
            title={"TodoList"}
            site="https://kirko-03.github.io/TodoList/"
          />
          <Work
            background={counter}
            title={"Counter"}
            site="https://kirko-03.github.io/Counter"
          />
                  </div>
      </div>
    </div>
  );
};

