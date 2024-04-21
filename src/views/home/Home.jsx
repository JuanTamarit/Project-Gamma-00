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
import Cvbutton from "../../components/buttons/cvbutton";
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
                Creativo especializado en
              </h2>
              <h2 className="text-default hero-section__profession-text">
                diseño gráfico, UX/UI
              </h2>
              <h2 className="text-default hero-section__profession-text">
                y diseño sonoro
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
              ¡Hola! Soy Juan, un profesional{" "}
              <strong>vocacional e inquieto</strong>, al que le gusta formar
              parte del proceso de creación de ideas. Mi
              <strong> formación en los fundamentos de la programación</strong>,
              me permite además sentirme cómodo en el ámbito digital.
            </p>
            <br />
            <p>
              Tengo una <strong>visión transversal</strong> de la comunicación y
              me atraen todas sus vertientes. Quizás por haber crecido en un
              entorno familiar artístico y diverso, y por mi faceta como músico
              profesional, previa a mi camino como diseñador.
            </p>
            <br />
            <p>
              Como persona, tengo un carácter{" "}
              <strong>tranquilo pero proactivo</strong>. Y me gusta trabajar
              tanto individualmente como en equipo. Aunque tengo especial
              interés en poder nutrirme de otras personas.
            </p>
            <br />
            <p>
              Actualmente, estoy buscando la oportunidad de poner en práctica
              mis conocimientos al servicio de los demás. Aparte de estar
              <strong> ampliando mi formación</strong> en los ámbitos de
              dirección de arte e identidad visual.
            </p>
            {/* <br />
            <p>¡Gracias por tu tiempo!</p> */}
          </section>
          <section className="skills-section">
            {/* <Cubeempty /> */}
            <div className="skills-section__knowledges-container">
              <span className="h3">Conocimientos</span>
              <div className="skills-section__skills-group--knowledges">
                <Skill type="straight" text="Dirección artística" />
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
              {/* <Button
                url="/cvjuantamaritabril24.pdf"
                download="/cvjuantamaritabril24.pdf"
                buttonType="secondary"
                icon={<Cv />}
                text="Descargar CV"
              /> */}
              <Cvbutton text="Descargar CV" />
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
