import { useContext, useEffect } from "react";
import BtnWhite from "../../components/BtnWhite/BtnWhite";
import Progress from "../../components/Progress/Progress";
import s from "./AboutMe.module.scss";
import { Context } from "../../context/Context";

const AboutMe = () => {
  const { skillId, setSkillId, getDataSkills, dataSkills } =
    useContext(Context);

  useEffect(() => {
    getDataSkills();
  }, []);

  {
  }

  return (
    <>
      <section className={s.aboutMe}>
        <img className={s.img} src="/Untitled_logo_1_free-file.jpg" alt="user2" />

        <div className={s.container}>
          <div className={s.block_1}>
            <h2 className={s.subtitle}>О нас</h2>

            <h1 className={s.title}>
              <span className={s.highlight}>7 Лет Опыта</span>
              <br />
              в Пуговичном деле
            </h1>

            <p className={s.text}>
              Мы
              <span className={s.highlight}> Tugma Uz.</span> Компания «PULSANTEKS» была основана в 2017 году. На сегодняшний день мы являемся единственными производителя пуговичных изделий в городе Ташкент. Продукция изготавливается из высококачественного сырья (полиэстера). Мы можем производить пуговицы по вашему запросу в любом размере, цветах,  в короткие сроки и по выгодной цене.

Кроме этого наша организация является дилером турецкой компании один из успешных в секторе металлического аксессуара для текстиля, такие как кнопки, пуговицы, люверсы. 

А флизелин клеевой - одним из важных расходных материалов текстильной отрасли, который мы начали импортировать из ведущей компании Китая.
            </p>
          </div>

          <div className={s.block_2}>
            {!!dataSkills &&
              dataSkills.map((el) => (
                <div key={el.id} onClick={() => setSkillId(el.id)}>
                  <BtnWhite title={el.title} padding={el.padding} />
                </div>
              ))}
          </div>

          {!!dataSkills &&
            dataSkills
              .filter((el) => +el.id === +skillId)
              .map((el) => (
                <div className={s.block_3} key={el.id}>
                  {el.info.text.map((text, i) => (
                    <Progress key={i} text={text} width={el.info.width[i]} />
                  ))}
                </div>
              ))}
        </div>
      </section>
    </>
  );
};

export default AboutMe;
