import s from "./BtnWhite.module.scss";

const BtnWhite = ({ title, padding }) => {
  return (
    <>
      <button className={s.btnWhite} type="button" style={{ padding: padding }}>
        {title}
      </button>
    </>
  );
};

export default BtnWhite;
