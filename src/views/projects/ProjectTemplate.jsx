import Topbar from "../../components/topbar/Topbar";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import Cvbutton from "../../components/buttons/cvbutton";
import { Link } from "react-router-dom";

function ProjectTemplate({
  number,
  title,
  intro,
  role,
  typology,
  technologies,
  tools,
  agency,
  client,
  year,
  link,
  media, // video o imagen
}) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Topbar url="/portafolio" link="←Proyectos" />

      <main className="project-main">
        <div className="project__header">
          <h2 className="h2">
            <span className="project-number">{number} </span>
            {title}
          </h2>

          <ProjectInfo
            role={role}
            typology={typology}
            technologies={technologies}
            tools={tools}
            agency={agency}
            client={client}
            year={year}
            link={link}
          />

          <div className="project__header--intro">
            <p className="h5">{intro}</p>
          </div>
        </div>

        <div className="project__content">
          <div className="project__img-container">
            {media?.type === "video" ? (
              <video className="project__img" width="100%" height="auto" controls>
                <source src={media.src} type="video/mp4" />
              </video>
            ) : (
              <img className="project__img" src={media.src} alt={title} />
            )}

            <span className="project__img-container--caption">
              {media?.caption}
            </span>
          </div>

          <section className="buttons-section">
            <span className="text-default">¿Has visto suficiente?</span>
            <div className="buttons">
              <Cvbutton text="CV detallado" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default ProjectTemplate;
