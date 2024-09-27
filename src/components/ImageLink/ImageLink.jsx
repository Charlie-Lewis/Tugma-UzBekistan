import s from "./ImageLink.module.scss";

const ImageLink = ({ href, src, alt }) => {
  return (
    <>
      <a className={s.ImageLink} href={href} target="_blank">
        <img className={s.logo} src={src} alt={alt} />
      </a>
    </>
  );
};

export default ImageLink;
