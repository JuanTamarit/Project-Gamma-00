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

function Ilustraciones() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Topbar url="/portafolio" link="←Proyectos" />
      <main className="project-main">
        <div className="project__header">
          <h2 className="h2">
            <span className="project-number">01 </span>Ilustraciones
            experimentales
          </h2>
          <ProjectInfo
            role="Diseñador gráfico"
            typology="Ilustración, Cartelería, Packaging"
            technologies="</Empty>"
            tools="Técnicas Manuales, Illustrator, Photoshop"
            agency="</Empty>"
            client="Proyectos personales"
            year="2022"
            link="</Empty>"
          />
          <div className="project__header--intro">
            {/* <span className="h5">Introducción</span> */}
            <p className="h5">
              Una serie de proyectos personales que me han servido para aprender
              nuevas técnicas y como excusa para diseñar para nuevos formatos.
            </p>
          </div>
        </div>

        <div className="project__content">
          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">Diseño de camiseta</div>
              <div className="h5 project-info__subtitle">Estilo urbano</div>
            </div>
            <div className="project-info__description">
              Este diseño pretende incitar a salir de la zona de confort, a
              hacer aquello que nos cuesta hacer pero que nos aporta placer o
              emociones agradables. El estilo gráfico viene inspirado por estas
              emociones; de fluidez, de goce, de desaparición del ego... Las
              influencias del diseño son movimientos como el brutalismo y el
              diseño retrowave.
            </div>
          </div>
          <div className="project__img-container">
            <img src="/img/ilustraciones/ilus1.jpg" alt="" />
            <span className="project__img-container--caption"></span>
          </div>
          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">
                Ilustración experimental
              </div>
              <div className="h5 project-info__subtitle">Cartel turístico</div>
            </div>
            <div className="project-info__description">
              Este fue un trabajo en el que traté de representar la ciudad de
              Kuala Lumpur de una manera distinta a como es habitual, buscando
              asociarla a los conceptos de exotismo, espiritualidad y sobretodo,
              modernidad. Para ello experimenté con colores y efectos ópticos,
              inspirándome en la obra del artista Carlos Cruz-Diez.
            </div>
          </div>

          <div className="project__img-container">
            <img src="/img/ilustraciones/ilus2.jpg" alt="" />
            <span className="project__img-container--caption">
              Observando la imagen desde diferentes ángulos se puede observar la
              aparición de un monumento representativo del lugar.
            </span>
          </div>
          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">Diseño de camiseta </div>
              <div className="h5 project-info__subtitle">
                Encuentra tu tribu
              </div>
            </div>
            <div className="project-info__description">
              El mensaje está inspirado en las ideas del psicólogo Sergi Rufi
              sobre las relaciones personales y la importancia de encontrar tu
              "tribu", tu red de apoyo; un grupo de personas con las que confíes
              y con las que puedas sentirte agusto siendo tú mismo. La
              tipografía se refuerza con una ilustración realizada por mí, que
              pretende transmitir diversas cosas, pero que en el fondo son una
              misma: comunidad, comunión, colaboración y la fuerza de lo
              primitivo.
            </div>
          </div>
          <div className="project__img-container">
            <img src="/img/ilustraciones/ilus3.jpg" alt="" />
            <span className="project__img-container--caption"></span>
          </div>

          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">Diseño de etiqueta</div>
              <div className="h5 project-info__subtitle">
                Un vino para los amantes del jazz
              </div>
            </div>
            <div className="project-info__description">
              Reinterpretación de una mítica portada correspondiente a un álbum
              de Thelonius Monk, pianista de jazz, utilizando elementos
              tipográficos.{" "}
            </div>
          </div>
          <div className="project__img-container">
            <img src="/img/ilustraciones/ilus4.jpg" alt="" />
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
              <Button
                icon={<Cv />}
                buttonType="secondary"
                text="CV detallado"
              />
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

export default Ilustraciones;
