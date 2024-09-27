import { useContext, useEffect } from 'react';
import s from './ChangeTestimonial.module.scss';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Context } from '../../context/Context';

const ChangeTestimonial = () => {
  const {
    getTestimonialsDataId,
    validNum,
    validFullName,
    validPosition,
    testimonialsDataById,
    putUserById,
  } = useContext(Context);

  const { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (message) => putUserById(message, id);

  useEffect(() => {
    getTestimonialsDataId(id);
  }, []);

  useEffect(() => {
    if (testimonialsDataById) {
      setValue('inpNum', testimonialsDataById.count);
      setValue('inpTextarea', testimonialsDataById.text);
      setValue('inpFullName', testimonialsDataById.title);
      setValue('inpPosition', testimonialsDataById.subtitle);
    }
  }, [testimonialsDataById]);

  return (
    <>
      <section className={s.changeTestimonial}>
        <h2 className={s.title}>Изменить</h2>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.tooltip}>
            <input
              {...register('inpNum', validNum)}
              type="text"
              placeholder="Count star"
            />

            {errors.inpNum?.message && (
              <span className={s.tooltiptext}>{errors.inpNum?.message}</span>
            )}
          </div>

          <textarea
            {...register('inpTextarea')}
            className={s.textarea}
            placeholder="text"
          />

          <div className={s.tooltip}>
            <input
              {...register('inpFullName', validFullName)}
              type="text"
              placeholder="Full name"
            />

            {errors.inpFullName?.message && (
              <span className={s.tooltiptext}>
                {errors.inpFullName?.message}
              </span>
            )}
          </div>

          <div className={s.tooltip}>
            <input
              {...register('inpPosition', validPosition)}
              type="text"
              placeholder="Position"
            />

            {errors.inpPosition?.message && (
              <span className={s.tooltiptext}>
                {errors.inpPosition?.message}
              </span>
            )}
          </div>

          <button className={s.submit} type="submit">
            Изменить
          </button>
        </form>
      </section>
    </>
  );
};

export default ChangeTestimonial;
