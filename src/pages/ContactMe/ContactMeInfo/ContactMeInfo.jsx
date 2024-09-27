import s from "./ContactMeInfo.module.scss";
import ContactMeInfoAddress from "./ContactMeInfoAddress/ContactMeInfoAddress";

const ContactMeInfo = () => {
  return (
    <>
      <div className={s.contactMeInfo}>
        <div className={s.block_1}>
          <h3 className={s.subtitle}>Связь 24/7</h3>
          <h2 className={s.title}>+998 (71) 200 27-77</h2>
        </div>

        <div className={s.block_2}>
          <ContactMeInfoAddress
            highlight={"Address:"}
            text={"Неизвестно"}
          />
          <ContactMeInfoAddress
            highlight={"Email:"}
            text={"Info@tugma.uz"}
          />
          <ContactMeInfoAddress
            highlight={"Work Hour:"}
            text={"Пон - Суб: 9:00 - 18:00"}
          />
        </div>
      </div>
    </>
  );
};

export default ContactMeInfo;
