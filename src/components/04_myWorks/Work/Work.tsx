import React, { useState } from "react";
let style = require("./Work.module.scss");

type WorkPropsType = {
  title: string;
  background:string
  site:string
};

const Work: React.FC<WorkPropsType> = (props) => {
  let backgroundImage = {backgroundImage:`url(${props.background})`,backgroundSize:'cover',backgroundPosition:'center'}
  const [mouse,setMouse] = useState<boolean>(false)
  return (
    <div className={style.works} id={'myWorks'}>
      <div className={style.project} onMouseLeave={()=>setMouse(false)} onMouseMove={()=>setMouse(true)} style={backgroundImage}>
         {mouse&&(<button ><a href={props.site} >Watch</a></button>)} 
      </div>
      <div className={style.info}>
        <div>{props.title}</div>
      </div>
    </div>
  );
};

export default Work;
