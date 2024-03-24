import Topbar from "../../components/topbar/Topbar";
import Skill from "../../components/skills/Skill";
import Button from "../../components/buttons/button";
import "./Home.scss";
import "../../scss/_images.scss";
import Credits from "../../components/credits/Credits";
import Cube from "../../components/Cube/Cube";
import Sphere from "../../components/Sphere/Sphere";
import Cone from "../../components/Cone/Cone";
import Cubeempty from "../../components/CubeEmpty/Cubeempty";
import Coneempty from "../../components/ConeEmpty/Coneempty";
import Sphereempty from "../../components/Sphereempty/Sphereempty";
import Download from "../../components/icons/download/download";
import Cv from "../../components/icons/cv/cv";
import PortafolioIcon from "../../components/icons/portafolio/portafolioIcon";
export default function Home() {
  return (
    <>
      <Topbar url="/portafolio" link="→Portafolio" />
      <main className="home-main">
        <section className="hero-section">
          {/* <Cube />
          <Sphere />
          <Cone /> */}
          <div className="hero-section__main-text">
            <span className="h1">Juan Tamarit</span>
            <div>
              <h2 className="text-default hero-section__profession-text">
                Creativo
              </h2>
              <h2 className="text-default hero-section__profession-text">
                Digital
              </h2>
              <h2 className="text-default hero-section__profession-text">
                Multidisciplinar
              </h2>
            </div>
          </div>
          <Credits />
          {/* <div className="hero-section__floor-container">
            <img
              className="hero-section__floor"
              src="/floor-mobile-optimized.svg"
              alt="decorative image"
            />
          </div> */}
        </section>
        <section className="content-section">
          <section className="bio-section text-regular">
            <p>
              ¡Hola! Mi nombre es Juan. Me defino como creativo porque no me
              considero un especialista, sino más bien un generalista. Mis
              habilidades fundamentales son el diseño gráfico y el diseño UX,
              aunque tengo una amplia formación y experiencia musicales que me
              gustaría aplicar también en proyectos transversales dentro del
              mundo de la comunicación. No me siento diseñador únicamente,
              además, porque me gusta conceptualizar, investigar y conocer los
              procesos en profundidad.
            </p>
            <br />
            <p>
              Aparte de mi formación académica, he sido influenciado por un
              entorno familiar repleto de otras disciplinas artísticas como la
              pintura, ejercida por mi padre desde siempre, o las artes
              escénicas, dedicación exclusiva de mi hermana.
            </p>
            <br />
            <p>
              Actualmente, estoy buscando la oportunidad de poner en práctica
              mis conocimientos al servicio de los demás y de poder aprender
              mucho en el proceso.
            </p>
            {/* <br />
            <p>¡Gracias por tu tiempo!</p> */}
          </section>
          <section className="skills-section">
            {/* <Cubeempty /> */}
            <div className="skills-section__knowledges-container">
              <span className="h3">Conocimientos</span>
              <div className="skills-section__skills-group--knowledges">
                <Skill type="rounded" text="Dirección artística" />
                <Skill type="rounded" text="Diseño gráfico" />
                <Skill type="straight" text="UX/UI" />
                <Skill type="rounded" text="Desarrollo web" />
                <Skill type="straight" text="Branding" />
                <Skill type="rounded" text="Wordpress" />
                <Skill type="straight" text="Marketing" />
                <Skill type="rounded" text="Fotografía" />
                <Skill type="straight" text="Motion Graphics" />
                <Skill type="rounded" text="Diseño sonoro" />
                <Skill type="rounded" text="Vídeo" />
                <Skill type="straight" text="Creative Coding" />
              </div>
            </div>
            {/* <Sphereempty /> */}
            <div className="skills-section__tools-container">
              <span className="h3">Herramientas</span>
              <div className="skills-section__skills-group--tools">
                <Skill type="rounded" text="Adobe creative suite" />
                <Skill type="straight" text="Figma" />
                <Skill type="rounded" text="Visual Studio Code" />
                <Skill type="straight" text="Git" />
                <Skill type="rounded" text="Logic Pro" />
              </div>
            </div>
            <div className="skills-section__technologies-container">
              <span className="h3">Tecnologías</span>
              <div className="skills-section__skills-group--Technologies">
                <Skill type="rounded" text="Html" />
                <Skill type="straight" text="Css" />
                <Skill type="rounded" text="Scss" />
                <Skill type="straight" text="Javascript" />
                <Skill type="rounded" text="React.js" />
              </div>
            </div>
            {/* <Coneempty /> */}
          </section>
          <section className="buttons-section">
            <span className="text-default">¿Quieres saber más?</span>
            <div className="buttons">
              <Button
                buttonType="secondary"
                icon={<Cv />}
                text="Descargar CV"
              />
              <Button
                buttonType="primary"
                url="/portafolio"
                icon={<PortafolioIcon />}
                text="Portafolio"
              />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
