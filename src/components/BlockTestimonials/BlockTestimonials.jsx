import { useContext } from 'react';
import Stars from '../Stars/Stars';
import s from './BlockTestimonials.module.scss';
import { Context } from '../../context/Context';
import BtnPrimary from '../BtnPrimary/BtnPrimary';
import { Link } from 'react-router-dom';

const BlockTestimonials = ({ src, alt, count, text, title, subtitle, id }) => {
  const { isAdmin, deleteUserById } = useContext(Context);
  return (
    <>
      <div className={s.container}>
        <img className={s.img} src={src} alt={alt} />

        <div className={s.block_1}>
          <Stars count={count} />
        </div>

        <p className={s.text}>{text}</p>

        <div className={s.block_2}>
          <h2 className={s.title}>{title}</h2>

          <h3 className={s.subtitle}>{subtitle}</h3>
        </div>

        {!!isAdmin && (
          <>
            <Link to={`/admin/${id}`}>
              <BtnPrimary text={"Change"} padding={"13px 31px"} />
            </Link>
            <div onClick={() => deleteUserById(id)}>
              <BtnPrimary text={"Delete"} padding={"13px 31px"} />
            </div>
          </>
        )} i lav you
      </div>
    </>
  );
};

export default BlockTestimonials;
