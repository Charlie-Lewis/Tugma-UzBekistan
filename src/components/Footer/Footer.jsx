import ImageLink from "../ImageLink/ImageLink";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <div className={s.container}>
          <div className={s.block_1}>

            <p className={s.text}>© Серцифицированно в 2024г. MCHJ"Tugma.UZ"</p>
          </div>

          <div className={s.block_2}>
            <h3 className={s.title}>Подпишитесь на нас:</h3>

            <div className={s.box}>
              <ImageLink
                href={"https://www.facebook.com/"}
                src={"/facebook.svg"}
                alt={"facebook"}
              />
              <ImageLink href={"https://www.x.com/"} src={"/x.svg"} alt={"x"} />
              <ImageLink
                href={"https://ru.linkedin.com/"}
                src={"/linkedin.svg"}
                alt={"linkedin"}
              />
              <ImageLink
                href={"https://mail.google.com/"}
                src={"/email.svg"}
                alt={"email"}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
