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
          <header className="logotipo">
            <div className="symbol">
              
              <img src="/img/kironWebSimbolo3.svg" />
            </div>

            <div className="logo">
              <img src="/img/kironWebLogo3.svg" />
            </div>
          </header>

          {/* <div className="hero-section__main-text">
            <span className="h1">Juan Tamarit</span>
            <div>
              <h2 className="text-default hero-section__profession-text">
                Creativo especializado en
              </h2>
              <h2 className="text-default hero-section__profession-text">
                Diseño gráfico, UX/UI
              </h2>
              <h2 className="text-default hero-section__profession-text">
                y Diseño sonoro
              </h2>
            </div>
          </div> */}
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
            <p className="h3">
              Nos presentamos,<br></br>
              Kiron se centra en el desarrollo de artistas musicales.
              Potenciamos tu identidad visual y/o sonora que te permita atraer a
              tu público y conectar con él, que te permita iniciar una carrera
              musical en serio, o darle un empujón enorme si ya está iniciada.
              ¿Cuál es nuestro objetivo? Que te conozcan primero, para poder
              llenar salas después. Para ello, nos servimos de los medios
              digitales, fundamentales hoy en día, para darte presencia y lograr
              que los programadores confíen en ti. • Si eres un/a artista con un
              sonido definido, te brindamos las herramientas necesarias para que
              consigas llenar la agenda por ti mismo. • Si eres un diamante en
              bruto, te ofrecemos además asesoramiento musical de calidad, para
              que puedas lanzar tu proyecto artístico y esté listo para los
              escenarios. Nuestro propósito es guiarte y que, como artista,
              encuentres el lugar que realmente mereces. ¿Nos dejas acompañarte?
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
