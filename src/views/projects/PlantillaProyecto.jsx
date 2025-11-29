import React from "react";
import { useParams } from "react-router-dom";
import "./Modelproject.scss";
import Topbar from "../../components/topbar/Topbar";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import Cvbutton from "../../components/buttons/cvbutton";

function PlantillaProyecto({ projects }) {
  const { carpeta } = useParams();
  const project = projects.find((p) => p.carpeta === carpeta);

  if (!project) return <p>Proyecto no encontrado</p>;

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <>
      <Topbar url="/portafolio" link="←Proyectos" />

      <main className="project-main">
        {/* HEADER */}
        <div className="project__header">
          <h2 className="h2">
            <span className="project-number">{project.number} </span>
            {project.title}
          </h2>

          <ProjectInfo
            role={project.role}
            typology={project.typology}
            technologies={project.technologies}
            tools={project.tools}
            agency={project.agency}
            client={project.client}
            year={project.year}
            link={project.link}
          />

          <div className="project__header--intro">
            <p className="h5">{project.intro}</p>
          </div>
        </div>

        {/* CONTENIDO */}
        <div className="project__content">
          {/* Renderizar párrafos con encabezados */}
          {project.paragraphs &&
            project.paragraphs.map((para, idx) => (
              <div className="project-info" key={idx}>
                <div className="project-info__titles">
                  <div className="h4 project-info__title">{para.header}</div>
                  {/* opcional subtítulo: si tienes subtitulo en JSON */}
                  {para.subtitle && (
                    <div className="h5 project-info__subtitle">{para.subtitle}</div>
                  )}
                </div>
                <div className="project-info__description">{para.text}</div>
              </div>
            ))}

          {/* Renderizar media */}
          {project.media.map((item, idx) => (
            <div className="project__img-container" key={idx}>
              {item.type === "video" && (
                <video className="project__img" controls>
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
              {item.type === "image" && (
                <img className="project__img" src={item.src} alt={project.title} />
              )}
              {item.type === "audio" && (
                <audio className="audioplayer" controls>
                  <source src={item.src} type="audio/mp3" />
                </audio>
              )}
              {item.caption && (
                <span className="project__img-container--caption">{item.caption}</span>
              )}
            </div>
          ))}

          {/* BOTONES */}
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

export default PlantillaProyecto;
