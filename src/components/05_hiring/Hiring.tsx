let style = require("./Hiring.module.scss");

export const Hiring = () => {
  return (
    <div className={style.hiringBlock}>
      <div className={style.block}>
        <h2>I am considering options for remote work</h2>
        <button className={style.button}>
          <a href={"https://hh.ru/resume/7e494630ff08cdb52d0039ed1f557278464e6d"}>Hire me</a>
        </button>
      </div>
    </div>
  );
};
