import s from "./BtnPrimary.module.scss";

const BtnPrimary = ({ text, padding }) => {
  return (
    <>
      <button
        className={s.btnPrimary}
        type="button"
        style={{ padding: padding }}
      >
        {text}
      </button>
    </>
  );
};

export default BtnPrimary;
