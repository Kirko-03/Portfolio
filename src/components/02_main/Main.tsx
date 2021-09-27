import style from "./Main.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import ReactTypingEffect from "react-typing-effect";
import MyFoto from "../../assets/img/myFoto.jpeg"

export const Main = () => {
  return (
    <div className={style.mainBlock} id="home">
      <div className={`${styleContainer.container} ${style.mainContainer}`}>
        <div className={style.text}>
          <span>Hi There</span>
          <h1>
            {" "}
            <ReactTypingEffect
              text={["I am Kirill Uvarov"]}
              speed={50}
              eraseSpeed={100}
            />
          </h1>
          <p>Frontend Developer</p>
        </div>

        <img src={MyFoto} className={style.photo}></img>
      </div>
    </div>
  );
};
