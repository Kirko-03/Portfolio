import style from "./Main.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import ReactTypingEffect from "react-typing-effect";

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

        <div className={style.photo}></div>
      </div>
    </div>
  );
};
