import s from "./ContactMe.module.scss";
import ContactMeForm from "./ContactMeForm/ContactMeForm";
import ContactMeInfo from "./ContactMeInfo/ContactMeInfo";

const ContactMe = () => {
  return (
    <>
      <section className={s.contactMe}>
        <div className={s.container}>
          <h3 className={s.subtitle}>Свяжитесь с Нами</h3>

          <h2 className={s.title}>Напишите и вам позвонят в течение нескольких раб.дней!</h2>

          <div className={s.block}>
            <ContactMeInfo />
            <ContactMeForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
