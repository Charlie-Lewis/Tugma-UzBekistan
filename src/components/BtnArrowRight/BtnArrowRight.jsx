import s from "./BtnArrowRight.module.scss";

const BtnArrowRight = ({ swiperRef }) => {
  return (
    <>
      <button
        className={s.btnArrowRight}
        onClick={() => swiperRef.current.slideNext()}
      >
        <svg
          className={s.svg}
          width="27"
          height="16"
          viewBox="0 0 27 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={s.path}
            d="M26.2071 8.70711C26.5976 8.31658 26.5976 7.68342 26.2071 7.29289L19.8431 0.928932C19.4526 0.538408 18.8195 0.538408 18.4289 0.928932C18.0384 1.31946 18.0384 1.95262 18.4289 2.34315L24.0858 8L18.4289 13.6569C18.0384 14.0474 18.0384 14.6805 18.4289 15.0711C18.8195 15.4616 19.4526 15.4616 19.8431 15.0711L26.2071 8.70711ZM0.5 9H13V7H0.5V9ZM13 9H25.5V7H13V9Z"
          />
        </svg>
      </button>
    </>
  );
};

export default BtnArrowRight;
