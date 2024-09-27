import { useContext } from "react";
import s from "./PopUp.module.scss";
import { Context } from "../../context/Context";

const PopUp = () => {
  const { isPopUp, switchPopUp, popUpId, dataServices } = useContext(Context);

  return (
    <>
      <div
        className={isPopUp ? `${s.popUp} ${s.active}` : s.popUp}
        onClick={switchPopUp}
      >
        {!!dataServices &&
          dataServices
            .filter((el) => +el.id === +popUpId)
            .map((el) => (
              <div
                key={el.id}
                className={s.block}
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className={s.title}>{el.title}</h2>

                <p className={s.text}>{el.text}</p>
              </div>
            ))}
      </div>
    </>
  );
};

export default PopUp;
