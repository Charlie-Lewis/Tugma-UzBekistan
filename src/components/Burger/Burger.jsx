import { Link } from 'react-router-dom';
import s from './Burger.module.scss';
import { useContext } from 'react';
import { MyContext } from '../../context/Context';

const Burger = () => {
  const { isBurger, switchBurger } = useContext(MyContext);

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
            <Link className={s.link} to={'/'}>
              Главная
            </Link>
            <Link className={s.link} to={'/about_Shakhzod'}>
              О нас
            </Link>
            <Link className={s.link} to={'/services'}>
              Сервисы
            </Link>
            <Link className={s.link} to={'/blog'}>
              Блог и отзывы
            </Link>
            <Link className={s.link} to={'/contact_Shakhzod'}>
               Cdzpm c Нами
            </Link>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Burger;
