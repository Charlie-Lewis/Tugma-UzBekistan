import s from "./Progress.module.scss";

const Progress = ({ text, width }) => {
  return (
    <>
      <div className={s.progress}>
        <h2 className={s.subtitle}>{text}</h2>

        <div className={s.frontLine}>
          <div className={s.backLine} style={{ width: width }}></div>
        </div>
      </div>
    </>
  );
};

export default Progress;
