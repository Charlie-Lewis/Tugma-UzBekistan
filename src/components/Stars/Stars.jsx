import s from "./Stars.module.scss";

const Stars = ({ count }) => {
  return [...Array(count)].map((el, i) => (
    <img key={i} src="/star.svg" alt="star" />
  ));
};

export default Stars;
