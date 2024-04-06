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

function Packaging(props) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Topbar url="/portafolio" link="←Proyectos" />
      <main className="project-main">
        <div className="project__header">
          <h2 className="h2">
            <span className="project-number">{props.number} </span>Rediseño de
            CD
          </h2>
          <ProjectInfo
            role="Diseñador gráfico"
            typology="Packaging, Ilustración, Editorial"
            technologies="</Empty>"
            tools="Illustrator"
            agency="Proyecto Personal"
            client="Proyecto Personal"
            year="2021"
            link="</Empty>"
          />
          <div className="project__header--intro">
            {/* <span className="h5">Introducción</span> */}
            <p className="h5">
              En base a las premisas del estilo tipográfico internacional como
              referencia, se realiza un rediseño que transmita visualmente los
              conceptos de Esencia, Fugacidad y Profundidad, escogidos por
              representar el carácter de la portada original y de este álbum de
              Baladas de Jazz.
            </p>
          </div>
        </div>

        <div className="project__content">
          <div className="project__img-container">
            <img src="/img/packaging/pack1.jpg" alt="" />
            <span className="project__img-container--caption">
              Resultado del rediseño
            </span>
          </div>
          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">El proyecto</div>
              <div className="h5 project-info__subtitle">
                Jazz a fuego lento{" "}
              </div>
            </div>
            <div className="project-info__description">
              Este ha sido siempre uno de mis discos favoritos. Se trata de un
              álbum de baladas muy introspectivo, lleno de piezas lentas,
              cargadas de melodías muy bellas que transmiten una calma enorme.
              La portada original y el disco en sí, según mi interpretación,
              pretenden transmitir nostalgia e impermanencia. Por este motivo,
              utilicé conceptos similares para realizar un rediseño que
              inspirase la caída de las hojas en otoño, respetando, no obstante,
              la predominancia de colores fríos de la portada original y
              utilizando el azul, muy asociado a la calma y la tranquilidad, lo
              cual encajaba perfecto con el carácter del álbum.
            </div>
          </div>
          <div className="project__img-container">
            <img src="/img/packaging/pack2.jpg" alt="" />
            <span className="project__img-container--caption">
              Portada original{" "}
            </span>
          </div>
          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">El cómo</div>
              <div className="h5 project-info__subtitle">
                Estilo tipográfico internacional{" "}
              </div>
            </div>
            <div className="project-info__description">
              Este proyecto fue una excusa para analizar y poner en práctica las
              premisas del estilo suizo o estilo tipográfico internacional. Me
              atrae por su carácter racional, objetivo y atemporal, y por ello
              analicé la obra de un referente como es Karl Gerstner y puse en
              práctica los recursos que él utilizaba en sus obras, como la
              reducción a lo esencial, el uso particular de las retículas como
              medio para lograr composiciones asimétricas muy interesantes, etc.
            </div>
          </div>
          <div className="project__img-container">
            <img src="/img/packaging/pack3.jpg" alt="" />
            <span className="project__img-container--caption">
              Detalle del resultado de la portada.
            </span>
          </div>
          <div className="project__img-container">
            <img src="/img/packaging/pack4.jpg" alt="" />
            <span className="project__img-container--caption">
              Detalle del "lomo" del CD.
            </span>
          </div>
          <div className="project__img-container">
            <img src="/img/packaging/pack5.jpg" alt="" />
            <span className="project__img-container--caption">
              Contraportada.
            </span>
          </div>
          <div className="project__img-container">
            <img src="/img/packaging/pack6.jpg" alt="" />
            <span className="project__img-container--caption">
              Parte exterior o frontal, del folleto interior.
            </span>
          </div>
          <div className="project__img-container">
            <img src="/img/packaging/pack7.jpg" alt="" />
            <span className="project__img-container--caption">
              Parte interior del folleto.
            </span>
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

export default Packaging;
