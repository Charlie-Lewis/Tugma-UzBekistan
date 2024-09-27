import { Link } from "react-router-dom";
import s from "./Burger.module.scss";
import { useContext } from "react";
import { Context } from "../../../context/Context";
import BtnPrimary from "../../BtnPrimary/BtnPrimary";

const Burger = () => {
  const { isBurger, switchBurger, isAdmin, logOut } = useContext(Context);

  return (
    <>
      <aside
        className={isBurger ? `${s.aside} ${s.active}` : s.aside}
        onClick={switchBurger}
      >
        <div className={s.close}>
          <span className={s.line}></span>
          <span className={s.line}></span>
        </div>

        <div className={s.container} onClick={(e) => e.stopPropagation()}>
          <ul className={s.links}>
            <Link className={s.link} to={"/"}>
              Главная
            </Link>
            <Link className={s.link} to={"/about_me"}>
              О нас
            </Link>
            <Link className={s.link} to={"/services"}>
              Сервисы
            </Link>
            <Link className={s.link} to={"/blog"}>
              Пуговицы и Отзывы
            </Link>
            <Link className={s.link} to={"/contact_me"}>
              Связь с нами
            </Link>
          </ul>

          {isAdmin ? (
            <div onClick={logOut}>
              <BtnPrimary text={"Log out"} padding={"17px 31px"} />
            </div>
          ) : (
            <Link to={"/log_in"}>
              <BtnPrimary text={"Log in"} padding={"17px 31px"} />
            </Link>
          )}
        </div>
      </aside>
    </>
  );
};

export default Burger;
