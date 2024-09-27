import { useContext, useEffect } from "react";
import BtnWhite from "../../../components/BtnWhite/BtnWhite";
import s from "./OurProjects.module.scss";
import { Context } from "../../../context/Context";

const OurProjects = () => {
  const {
    dataOurProjects,
    getDataOurProjects,
    selectedProject,
    setSelectedProject,
  } = useContext(Context);

  useEffect(() => {
    getDataOurProjects();
  }, []);

  useEffect(() => {
    if (dataOurProjects && dataOurProjects.length > 0) {
      setSelectedProject(dataOurProjects[0]);
    }
  }, [dataOurProjects]);

  return (
    <>
      <section className={s.ourProjects}>
        <div className={s.container_1}>
          <h3 className={s.subtitle}>Наши Пуговицы</h3>
          <h2 className={s.title}>
           
           
          </h2>
        </div>

        <div className={s.container_2}>
          {!!dataOurProjects &&
            dataOurProjects.map((el) => (
              <div key={el.id} onClick={() => setSelectedProject(el)}>
                <BtnWhite title={el.title} padding={el.padding} />
              </div>
            ))}
        </div>

        <div className={s.container_3}>
          {!!selectedProject &&
            selectedProject.image.map((el) => (
              <img className={s.img} key={el.id} src={el.src} alt={el.alt} />
            ))}
        </div>
      </section>
    </>
  );
};

export default OurProjects;
