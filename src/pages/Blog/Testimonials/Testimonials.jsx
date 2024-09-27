import { useContext, useEffect, useRef } from "react";
import BtnArrowLeft from "../../../components/BtnArrowLeft/BtnArrowLeft";
import BtnArrowRight from "../../../components/BtnArrowRight/BtnArrowRight";
import s from "./Testimonials.module.scss";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import BlockTestimonials from "../../../components/BlockTestimonials/BlockTestimonials";
import { Context } from "../../../context/Context";

const Testimonials = () => {
  const { dataTestimonials, getDataTestimonials } = useContext(Context);

  const swiperRef = useRef();

  useEffect(() => {
    getDataTestimonials();
  }, []);

  return (
    <>
      <section className={s.testimonials}>
        <h3 className={s.subtitle}>Отзывы</h3>

        <h2 className={s.title}>Честность со стороны наших Клиентов</h2>

        <div className={s.container_1}>
          <BtnArrowLeft swiperRef={swiperRef} />
          <BtnArrowRight swiperRef={swiperRef} />
        </div>

        <div className={s.container_2}>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              390: {
                slidesPerView: 1,
              },
              620: {
                slidesPerView: 2,
              },
              950: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            watchSlidesProgress
            modules={[A11y]}
            grabCursor
            className="mySwiper"
          >
            {!!dataTestimonials &&
              dataTestimonials.map((el) => (
                <SwiperSlide key={el.id}>
                  <BlockTestimonials
                    id={el.id}
                    src={el.src}
                    alt={el.alt}
                    count={el.count}
                    text={el.text}
                    title={el.title}
                    subtitle={el.subtitle}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
