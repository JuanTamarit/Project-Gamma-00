import "./Modelproject.scss";
import Topbar from "../../components/topbar/Topbar";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import User from "../../components/User/user";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/button";
import Download from "../../components/icons/download/download";
import Mail from "../../components/icons/mail/mail";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { doc } from "firebase/firestore";
import db from "../../firebase";
import { useEffect } from "react";
import Cv from "../../components/icons/cv/cv";
import Cvbutton from "../../components/buttons/cvbutton";

function Infografia(props) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Topbar url="/portafolio" link="←Proyectos" />
      <main className="project-main">
        <div className="project__header">
          <h2 className="h2">
            <span className="project-number">{props.number} </span>Cartel
            pedagógico
          </h2>
          <ProjectInfo
            role="Diseñador gráfico"
            typology="Infografía"
            technologies="</Empty>"
            tools="Adobe Indesign"
            agency="</Empty>"
            client="Proyecto personal"
            year="2021"
            link="</Empty>"
          />
          <div className="project__header--intro">
            {/* <span className="h5">Introducción</span> */}
            <p className="h5">
              Cartel de carácter pedagógico sobre las partes que componen la
              letra.
            </p>
          </div>
        </div>

        <div className="project__content">
          <div className="project__img-container">
            <img src="/img/infografia/info1.jpg" alt="" />
            <span className="project__img-container--caption"></span>
          </div>
          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">Descripción</div>
              <div className="h5 project-info__subtitle"></div>
            </div>
            <div className="project-info__description">
              Este proyecto consistía en traducir una gran cantidad de
              información técnica sobre la tipografía, en una infografía
              completa pero visualmente atractiva. Para ello, se trató de
              jerarquizar la información mediante el tamaño de los elementos y
              teniendo en cuenta el orden de lectura.
            </div>
          </div>
          <div className="project__img-container">
            <img src="/img/infografia/info2.jpg" alt="" />
            <span className="project__img-container--caption"></span>
          </div>

          <div className="project__img-container">
            <img src="/img/infografia/info3.jpg" alt="" />
            <span className="project__img-container--caption"></span>
          </div>
          <div className="project__img-container">
            <img src="/img/infografia/info4.jpg" alt="" />
            <span className="project__img-container--caption"></span>
          </div>
          <div className="project__img-container">
            <img src="/img/infografia/info5.jpg" alt="" />
            <span className="project__img-container--caption"></span>
          </div>

          {/* BOTONES DE NAVEGACIÓN ENTRE PROYECTOS */}
          {/* <div className="project__nav">
            <Link to="/portafolio" className="h6">
              <span>←Anterior</span>
            </Link>
            <Link to="/maslow" onClick={scrollToTop} className="h6">
              <span>Siguiente→</span>
            </Link>
          </div> */}

          <section className="buttons-section">
            <span className="text-default">¿Has visto suficiente?</span>
            <div className="buttons">
              <Cvbutton text="CV detallado" />

              <Button
                buttonType="primary"
                url="/portafolio"
                icon={<Mail />}
                text="Contactar"
                showIcon="show-icon"
              />
            </div>
            {/* <Link to="/home" className="text-default project__home-link">
              <span className="project__home-link-arrow">←</span>Volver a la
              Home
            </Link> */}
          </section>
        </div>
      </main>
    </>
  );
}

export default Infografia;
