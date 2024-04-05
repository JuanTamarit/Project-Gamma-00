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

function Modelproject() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const testFunction = async () => {
    //Recoger un documento
    const maslowTitle = await getDoc(doc(db, "proyectos/maslow"));
    console.log("doc -> ", maslowTitle.data());

    // Recoger una coleccion (array de documentos)
    const col = await getDocs(collection(db, "proyectos"));
    col.forEach((doc) => {
      console.log(`collection ${doc.id} -> `, doc.data());
    });
  };

  useEffect(() => {
    testFunction();
  });
  return (
    <>
      <Topbar url="/portafolio" link="←Proyectos" />
      <main className="project-main">
        <div className="project__header">
          <h2 className="h2">
            <span className="project-number">00 </span>Sobre este portafolio
          </h2>
          <ProjectInfo
            role="Diseñador UX/UI, Desarrollador"
            typology="Web, UX"
            technologies="React.js"
            tools="Figma, Illustrator, Vs Code, Git"
            agency="</Empty>"
            client="</Empty>"
            year="2024"
            link="</Empty>"
          />
          <div className="project__header--intro">
            {/* <span className="h5">Introducción</span> */}
            <p className="h5">
              Este proyecto se inició con el objetivo de mostrar mi trabajo.
              Para ello me inspiré en las interfaces de las películas de ciencia
              ficción. A continuación, se muestra el proceso que realicé. El
              cual ejemplifica, a muy grandes rasgos, mi proceso de diseño de
              productos digitales en general. El proceso expuesto corresponde a
              una versión anterior de este sitio web.
            </p>
          </div>
        </div>

        <div className="project__content">
          {/* <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title"> Fase 01</div>
              <div className="h5 project-info__subtitle">
                Definiendo una estructura
              </div>
            </div>
            <div className="project-info__description">
              De manera muy sintetizada, este es el proceso que aplicaría a
              cualquier producto digital. Teniendo en cuenta que hemos obviado
              en este resumen partes del proceso de investigación que tendrían
              lugar si se tratara de proyectos más ambiciosos o en los que
              estuviera implicado un equipo de trabajo mayor.
            </div>
          </div> */}
          {/* <div className="project__img-container">
            <img src="src/assets/img/content-list.png" alt="" />
            <span className="project__img-container--caption">
              Utilizo las hojas de cálculo para visualizar todo el contenido que
              tendremos que organizar.
            </span>
          </div> */}
          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title"> Fase 01</div>
              <div className="h5 project-info__subtitle">
                Entendiendo el problema{" "}
              </div>
            </div>
            <div className="project-info__description">
              La necesidad inicial consiste en tener una plataforma donde
              exponer y explicar mis proyectos. Parte del problema, sería
              conseguir llamar la atención en un mercado laboral donde ya hay
              muchos profesionales.
            </div>
          </div>

          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">Fase 02</div>
              <div className="h5 project-info__subtitle">
                Elaborando una hipótesis o solución
              </div>
            </div>
            <div className="project-info__description">
              La solución planteada es crear una página web a modo de
              portafolio, buscando un toque llamativo y original, lo cual
              transmitiría también la capacidad de plantear soluciones de diseño
              particularizadas, que puedan o no, seguir las tendencias estéticas
              del momento.
            </div>
          </div>

          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">Fase 03</div>
              <div className="h5 project-info__subtitle">
                Definiendo la estructura básica{" "}
              </div>
            </div>
            <div className="project-info__description">
              Llega el momento de dar forma al proyecto. Para ello, seguimos los
              siguientes pasos.
            </div>
          </div>

          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title"></div>
              <div className="h5 project-info__subtitle">
                3.1. Obtener y organizar el contenido{" "}
              </div>
            </div>
            <div className="project-info__description">
              Es necesario hacer un inventario del contenido. Esto nos permitirá
              empezar a definir una arquitectura de la información, que iremos
              construyendo ayudados de diferentes técnicas, como por ejemplo la
              de card sorting.
            </div>
          </div>

          {/* <User /> */}
          <div className="project__content--ia">
            <div className="project__img-container">
              <img src="/img/content-list.png" alt="" />
              <span className="project__img-container--caption">
                Utilizo las hojas de cálculo para visualizar todo el contenido a
                organizar.
              </span>
            </div>
            <p>
              El <span className="text-bold">sitemap</span>, es uno de los
              resultados de este proceso de organización. Muestra la
              arquitectura que tendrá nuestro sitio. Para este caso, nuestro
              sitemap sería muy sencillo. El core de nuestro portafolio se
              podría resumir en el siguiente esquema:
            </p>
            <div className="project__img-container">
              <img src="/img/sitemap.png" alt="" />
              <span className="project__img-container--caption">
                Tendremos una página principal, una página, "Portafolio", donde
                se podrán ver categorizados todos los proyectos según la
                disciplina, y una subpágina por cada proyecto en particular.
              </span>
            </div>
            <p>
              Otra herramienta útil en este punto son los{" "}
              <span className="text-bold">userflows</span>, que nos permiten
              seguir puliendo la AI y sentar los cimientos de nuestro futuro
              diseño según unos objetivos predefinidos. Son muy importantes,
              dado que nos ponen en la piel del usuario y nos permiten crear
              productos para que tanto el usuario como nosotros, como
              diseñadores o negocios, alcancemos nuestros objetivos de la manera
              más fácil y rápida posible.
            </p>
            <div className="project__img-container">
              <img src="/img/userflow-bn.png" alt="" />
              <span className="project__img-container--caption">
                Diagrama de flujo que nos permite visualizar o crear el
                recorrido de un usuario desde que accede a nuestra web hasta que
                realiza la acción que buscamos.
              </span>
            </div>

            <div className="project-info">
              <div className="project-info__titles">
                <div className="h4 project-info__title"></div>
                <div className="h5 project-info__subtitle">
                  3.2 Definir el esqueleto de nuestra web{" "}
                </div>
              </div>
              <div className="project-info__description">
                Se pasa a definir el "esqueleto" del portafolio una vez
                estructurado el contenido. En este punto se realizan wireframes
                como base para la maquetación de nuestro diseño.
              </div>
            </div>

            <div className="project__img-container" id="wireframes-img">
              <img src="/img/wireframes.jpg" alt="" />
              <span className="project__img-container--caption">
                Ejemplo de parte de los wireframes realizados para obtener la
                estructura de la página principal.
              </span>
            </div>
          </div>

          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">Fase 04</div>
              <div className="h5 project-info__subtitle">
                Diseñando una solución{" "}
              </div>
            </div>
            <div className="project-info__description">
              En base a nuestra investigación inicial y un estudio gráfico de
              referentes y competencia pasamos a diseñar. Sabiendo, después de
              haber investigado, que se busca un diseño que sea estéticamente
              llamativo, original y tecnológico. Antes de pasar a desarrollo,
              también sería interesante, realizar un prototipo que validase el
              funcionamiento del diseño, o dicho de otro modo, la solución
              planteada al problema. Aunque en este caso, dada la escasez de
              tiempo y recursos, ya que solo se cuenta con una persona encargada
              de diseñar y desarrollar, se realiza un diseño final en base a
              estándares y principios de UX, que nos aporten una garantía de
              éxito.
            </div>
          </div>

          <div className="project__img-container">
            <img src="/img/Figma-screenshot.png" alt="" />
            <span className="project__img-container--caption">
              Muestra del diseño original, el cual contiene diferentes elementos
              estandarizados, conformando un pequeño design system.
            </span>
          </div>

          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">Fase 05</div>
              <div className="h5 project-info__subtitle">
                Desarrollo y comprobación{" "}
              </div>
            </div>
            <div className="project-info__description">
              En este punto es donde entregaríamos el diseño al equipo de
              desarrollo. Aunque en este caso nos hemos encargado nosotros
              mismos de este. Una vez desarrollado y lanzado el producto final,
              utilizaríamos diferentes recursos para monitorizar y comprobar el
              cumplimiento de los objetivos planteados.
            </div>
          </div>

          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">Conclusión</div>
              <div className="h5 project-info__subtitle">
                ¡Navega por esta web y experimenta el resultado!
              </div>
            </div>
            <div className="project-info__description">
              De manera muy sintetizada, este el proceso que aplicaría a
              cualquier producto digital. Teniendo en cuenta que hemos obviado
              en este resumen partes del proceso de investigación que tendrían
              lugar si se tratara de proyectos más ambiciosos o en los que
              estuviera implicado un equipo de trabajo mayor.
              <br></br>
              <br></br>
              <p className="text-semibold"></p>
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

export default Modelproject;
