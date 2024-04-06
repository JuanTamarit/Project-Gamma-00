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

function Maslowui(props) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Topbar url="/portafolio" link="←Proyectos" />
      <main className="project-main">
        <div className="project__header">
          <h2 className="h2">
            <span className="project-number">{props.number} </span>Maslow
          </h2>
          <ProjectInfo
            role="Diseñador web"
            typology="Web, UI"
            technologies="Wordpress"
            tools="Figma, Photoshop"
            agency="Proyecto Personal"
            client="Proyecto Personal"
            year="2023"
            link="</Empty>"
          />
          <div className="project__header--intro">
            {/* <span className="h5">Introducción</span> */}
            <p className="h5">
              Diseño minimalista y desarrollo de una plantilla para wordpress
              desde cero, cuyo contenido es fácilmente gestionable para el
              usuario.
            </p>
          </div>
        </div>

        <div className="project__content">
          <div className="project__img-container">
            <img src="/img/maslow/Portadilla-maslow-web.jpg" alt="" />
            <span className="project__img-container--caption"></span>
          </div>
          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">El proyecto</div>
              <div className="h5 project-info__subtitle">Aspectos gráficos</div>
            </div>
            <div className="project-info__description">
              Este proyecto, a nivel gráfico, está muy orientado al usuario.
              Jóvenes de entre 18 y 25 años, personas creativas, reflexivas,
              críticas, amantes de la naturaleza y de la moda urbana. Por ello,
              se buscó una estética minimalista que transmite calma, con un rojo
              especial predominante, evocando naturalismo, comunidad y artesanía
              también, por su parecido al pigmento rojo primitivo. Estos
              elementos se combinan con un logotipo anguloso y una tipografía
              ancha, aportando ese toque transgresor tan propio de dicha
              generación.
            </div>
          </div>
          <div className="project__img-container">
            <video className="project__video" controls>
              <source src="/img/maslow/maslowwebvideo.mp4" type="video/mp4" />
            </video>
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

export default Maslowui;
