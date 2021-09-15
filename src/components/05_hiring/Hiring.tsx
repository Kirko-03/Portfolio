let style = require("./Hiring.module.scss");

export const Hiring = () => {
  return (
    <div className={style.hiringBlock}>
      <div className={style.block}>
        <h2>I am considering options for remote work</h2>
        <button className={style.button}>
          <a href={"https://hh.ru"}>Hire me</a>
        </button>
      </div>
    </div>
  );
};
