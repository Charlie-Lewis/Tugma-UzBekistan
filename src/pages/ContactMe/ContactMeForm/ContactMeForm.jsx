import { useContext } from "react";
import s from "./ContactMeForm.module.scss";
import { useForm } from "react-hook-form";
import { Context } from "../../../context/Context";

const ContactMeForm = () => {
  const { sendTelegramMessage, validName, validEmail, validCheckbox } =
    useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => sendTelegramMessage(data);

  return (
    <>
      <form className={s.contactMeForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.block_1}>
          <div className={s.tooltip}>
            <input
              {...register("inpName", validName)}
              className={s.inpName}
              type="text"
              placeholder="Имя и Фамилия*"
            />

            {errors.inpName?.message && (
              <span className={s.tooltipText}>{errors.inpName?.message}</span>
            )}
          </div>

          <div className={s.tooltip}>
            <input
              {...register("inpEmail", validEmail)}
              className={s.inpEmail}
              type="text"
              placeholder="Ваша Почта*"
            />

            {errors.inpEmail?.message && (
              <span className={s.tooltipText}>{errors.inpEmail?.message}</span>
            )}
          </div>
        </div>

        <input
          {...register("inpTitle")}
          className={s.inpTitle}
          type="text"
          placeholder="Ваш вопрос?"
        />

        <textarea
          {...register("textarea")}
          className={s.textarea}
          placeholder="Как мы можем вам помочь?"
        />

        <div className={s.tooltip}>
          <label className={s.block_2}>
            <input
              {...register("inpCheckbox", validCheckbox)}
              className={s.inpCheckbox}
              type="checkbox"
            />
            By submitting, i’m agreed to the Terms & Conditons
          </label>

          {errors.inpCheckbox?.message && (
            <span className={s.tooltipText}>{errors.inpCheckbox?.message}</span>
          )}
        </div>

        <button className={s.submit} type="submit">
          Отправить
        </button>
      </form>
    </>
  );
};

export default ContactMeForm;
