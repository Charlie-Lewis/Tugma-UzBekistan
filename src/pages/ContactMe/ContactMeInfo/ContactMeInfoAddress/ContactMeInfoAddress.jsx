import s from "./ContactMeInfoAddress.module.scss";

const ContactMeInfoAddress = ({ highlight, text }) => {
  return (
    <>
      <p className={s.ContactMeInfoAddress}>
        <span className={s.highlight}>{highlight} </span>
        {text}
      </p>
    </>
  );
};

export default ContactMeInfoAddress;
