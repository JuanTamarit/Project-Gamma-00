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

function Sonido(props) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Topbar url="/portafolio" link="←Proyectos" />
      <main className="project-main">
        <div className="project__header">
          <h2 className="h2">
            <span className="project-number">{props.number} </span>Piezas
            pequeñas
          </h2>
          <ProjectInfo
            role="Diseñador sonoro"
            typology="Diseño sonoro"
            technologies="</Empty>"
            tools="Logic Pro"
            agency="Proyecto Personal"
            client="Proyecto Personal"
            year="Varios"
            link="</Empty>"
          />
          <div className="project__header--intro">
            {/* <span className="h5">Introducción</span> */}
            <p className="h5">
              Compendio de experimentos sonoros inspirados en imágenes reales o
              fictícias buscando describir situaciones y pensados para acompañar
              a una posible parte visual.
            </p>
          </div>
        </div>

        <div className="project__content">
          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">3 p.m in NY</div>
              <div className="h5 project-info__subtitle">
                <audio className="audioplayer" controls>
                  <source src="/sounds/Esbozosonoro1.mp3" type="audio/mp3" />
                </audio>{" "}
              </div>
            </div>
            <div className="project-info__description">
              Pieza inspirada en una fotografía realizada por el fotógrafo
              Christopher Anderson, titulada "Marion on the bed in Brooklyn".
            </div>
          </div>
          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">Esbozo sonoro nº1</div>
              <div className="h5 project-info__subtitle">
                <audio className="audioplayer" controls>
                  <source src="/sounds/Esbozosonoro2.mp3" type="audio/mp3" />
                </audio>{" "}
              </div>
            </div>
            <div className="project-info__description">
              Pieza pensada para reproducirse en bucle, experimentando con la
              mezcla de sonidos electrónicos y acústicos buscando una estética
              pseudofuturísta.
            </div>
          </div>
          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">Esbozo sonoro nº2</div>
              <div className="h5 project-info__subtitle">
                <audio className="audioplayer" controls>
                  <source src="/sounds/Esbozosonoro3.mp3" type="audio/mp3" />
                </audio>{" "}
              </div>
            </div>
            <div className="project-info__description">
              Fragmento inspirado en la última fase del proceso de metamorfosis
              de una mariposa. Dividida en dos partes. La primera de ellas
              representa el momento de suspense en el que el insecto intenta con
              dificultad romper el capullo. La segunda, la irrupción de la
              mariposa en el aire.
            </div>
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
              {/* <Button
                buttonType="primary"
                url="/portafolio"
                icon={<Mail />}
                text="Contactar"
                showIcon="show-icon"
              /> */}
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

export default Sonido;
