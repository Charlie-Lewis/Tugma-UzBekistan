import { useContext, useEffect } from "react";
import s from "./Admin.module.scss";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import BlockTestimonials from "../../components/BlockTestimonials/BlockTestimonials";
import BtnPrimary from "../../components/BtnPrimary/BtnPrimary";

const Admin = () => {
  const { dataTestimonials, getDataTestimonials } = useContext(Context);

  useEffect(() => {
    getDataTestimonials();
  }, []);

  return (
    <>
      <section className={s.admin}>
        <Link to={"/admin/new_testimonial"} className={s.link}>
          <BtnPrimary text={"Create"} padding={"13px 31px"} />
        </Link>

        <div className={s.container}>
          {!!dataTestimonials &&
            dataTestimonials.map((el) => (
              <BlockTestimonials
                key={el.id}
                src={el.src}
                alt={el.alt}
                count={el.count}
                text={el.text}
                title={el.title}
                subtitle={el.subtitle}
                id={el.id}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default Admin;
