import React from "react";
import { useParams } from "react-router-dom";
import "./Modelproject.scss";
import Topbar from "../../components/topbar/Topbar";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import Cvbutton from "../../components/buttons/cvbutton";
import projects from "../../data/projects.json"; // Tu JSON de proyectos

function PlantillaProyecto() {
  const { carpeta } = useParams(); // Extrae el nombre de la carpeta de la URL

  // Busca el proyecto que coincida con la carpeta de la URL
  const project = projects.find((p) => p.carpeta === carpeta);

  // Si no encuentra el proyecto
  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }

  return (
    <>
      <Topbar url="/portafolio" link="←Proyectos" />

      <main className="project-main">
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

        <div className="project__content">
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
