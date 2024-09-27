import { Link } from "react-router-dom";
import s from "./Nav.module.scss";
import { useContext } from "react";
import { Context } from "../../context/Context";
import Burger from "./Burger/Burger";
import BtnPrimary from "../BtnPrimary/BtnPrimary";

const Nav = () => {
  const { switchBurger, isAdmin, logOut } = useContext(Context);

  return (
    <>
      <nav className={s.nav}>
        <Burger />

        <Link to={"/"}>
          <img className={s.img} src="/Untitled_logo_1_free-file.jpg" alt="logo" />
        </Link>

        <div className={s.container}>
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
              Пуг./Отзывы
            </Link>
            <Link className={s.link} to={"/contact_me"}>
              Связь с Нами
            </Link>
          </ul>

          {!!isAdmin ? (
            <div onClick={logOut}>
              <BtnPrimary text={"Выйти"} padding={"13px 31px"} />
            </div>
          ) : (
            <Link to={"/log_in"}>
              <BtnPrimary text={"Войти"} padding={"13px 31px"} />
            </Link>
          )}
        </div>

        <img
          className={s.burger_menu}
          src="/burger_menu_open.svg"
          alt="burger_menu_open"
          onClick={switchBurger}
        />
      </nav>
    </>
  );
};

export default Nav;
