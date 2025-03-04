import s from "./BtnArrowLeft.module.scss";

const BtnArrowLeft = ({ swiperRef }) => {
  return (
    <>
      <button
        className={s.btnArrowLeft}
        onClick={() => swiperRef.current.slidePrev()}
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
            d="M0.792893 7.29289C0.402369 7.68342 0.402369 8.31658 0.792892 8.7071L7.15685 15.0711C7.54738 15.4616 8.18054 15.4616 8.57107 15.0711C8.96159 14.6805 8.96159 14.0474 8.57107 13.6569L2.91421 8L8.57107 2.34314C8.96159 1.95262 8.96159 1.31946 8.57107 0.928931C8.18054 0.538406 7.54738 0.538406 7.15686 0.92893L0.792893 7.29289ZM26.5 7L14 7L14 9L26.5 9L26.5 7ZM14 7L1.5 7L1.5 9L14 9L14 7Z"
          />
        </svg>
      </button>
    </>
  );
};

export default BtnArrowLeft;
