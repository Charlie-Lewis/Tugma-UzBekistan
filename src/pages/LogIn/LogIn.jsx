import { useForm } from 'react-hook-form';
import s from './LogIn.module.scss';
import { useContext, useEffect } from 'react';
import { Context } from '../../context/Context';
import { register } from 'swiper/element';

const LogIn = () => {
  const { checkLogIn, getAdmin } = useContext(Context);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getAdmin();
  }, []);

  const onSubmit = (data) => {
    checkLogIn(data);
  };
  return (
    <>
      <section className={s.logIn}>
        <div className={s.container}>
          <form className={s.block} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.box_1}>
              <h2 className={s.title}>Добро Пожаловать</h2>
              <h3 className={s.subtitle}>
Мы рады видеть вас снова с нами
              </h3>
            </div>

            <label className={s.label}>
              <img className={s.img} src="/log_user.svg" alt="log_user" />

              <input
                {...register('username')}
                className={s.inpText}
                type="text"
                placeholder="Имя пользователя"
              />
            </label>

            <label className={s.label}>
              <img
                className={s.img}
                src="/log_password.svg"
                alt="log_password"
              />

              <input
                {...register('password')}
                className={s.inpText}
                type="password"
                placeholder="Пароль"
              />
            </label>

            <button className={s.btn} type="submit">
              Продолжить
            </button>
          </form>

          <img className={s.log_img} src="/Untitled_logo_1_free-file.jpg" alt="login" />
        </div>
      </section>
    </>
  );
};

export default LogIn;
