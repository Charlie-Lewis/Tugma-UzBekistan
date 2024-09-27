import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import s from "./OurMilestonesCard.module.scss";
import CountUp from "react-countup";
import { Context } from "../../context/Context";

const OurMilestonesCard = ({ title, text, suffix }) => {
  const { isCounter, setIsCounter } = useContext(Context);

  const { ref, inView } = useInView({
    triggerOnce: true,

    onChange: (inView) => {
      if (inView) setIsCounter(true);
    },
  });

  return (
    <>
      <div className={s.ourMilestonesCard} ref={ref}>
        <h2 className={s.title}>
          {isCounter && (
            <CountUp end={title} separator="" suffix={suffix} duration={2} />
          )}
        </h2>

        <p className={s.text}>{text}</p>
      </div>
    </>
  );
};

export default OurMilestonesCard;
