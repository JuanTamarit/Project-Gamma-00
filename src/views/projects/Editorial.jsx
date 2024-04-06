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

function Editorial(props) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Topbar url="/portafolio" link="←Proyectos" />
      <main className="project-main">
        <div className="project__header">
          <h2 className="h2">
            <span className="project-number">{props.number} </span>Proyecto de
            Maquetación
          </h2>
          <ProjectInfo
            role="Diseñador gráfico"
            typology="Editorial"
            technologies="</Empty>"
            tools="Indesign"
            agency="Proyecto Personal"
            client="Proyecto Personal"
            year="2021"
            link="</Empty>"
          />
          <div className="project__header--intro">
            {/* <span className="h5">Introducción</span> */}
            <p className="h5">
              Ejercicios personales con el objetivo de poner en práctica los
              conocimientos adquiridos sobre diseño editorial.
            </p>
          </div>
        </div>

        <div className="project__content">
          <div className="project__img-container">
            <img src="/img/editorial/edit1.jpg" alt="" />
            <span className="project__img-container--caption"></span>
          </div>
          {/* <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">El proyecto</div>
              <div className="h5 project-info__subtitle">
                Una marca con trasfondo social
              </div>
            </div>
            <div className="project-info__description">
              Este proyecto, ubicado dentro de la moda urbana, no es una marca
              de camisetas al uso. Es más bien un soporte de expresión para
              artistas, un soporte en el que reivindicar sus principios, y a su
              vez, por su puesto, un medio de expresión también, a través de la
              identificación, para un determinado grupo de jóvenes con unas
              inquietudes y valores determinados.
            </div>
          </div> */}
          <div className="project__img-container">
            <img src="/img/editorial/edit2.jpg" alt="" />
            <span className="project__img-container--caption"></span>
          </div>
          <div className="project__img-container">
            <img src="/img/editorial/edit3.jpg" alt="" />
            <span className="project__img-container--caption"></span>
          </div>
          <div className="project__img-container">
            <img src="/img/editorial/edit4.jpg" alt="" />
            <span className="project__img-container--caption"></span>
          </div>
          <div className="project__img-container">
            <img src="/img/editorial/edit5.jpg" alt="" />
            <span className="project__img-container--caption"></span>
          </div>

          <div className="project__img-container">
            <img src="/img/editorial/edit6.jpg" alt="" />
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
              <Cvbutton text="Cv detallado" />
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

export default Editorial;
