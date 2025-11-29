import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import $ from "jquery";
import projectsJSON from "/Users/juantamaritvalls/Documents/KIRON/Project-Gamma-00/src/data/projects.json";
import "./dropdown.scss";

function Dropdown() {
  const [dropdownActive, setDropdownActive] = useState({});
  const location = useLocation();

  // Resetear dropdown al cambiar de ruta
  useEffect(() => {
    setDropdownActive({});
  }, [location]);

  // Manejo de apertura/cierre de categorías
  useEffect(() => {
    const handleClick = (event) => {
      if ($(event.target).hasClass("dropdown__category")) {
        const listItem = $(event.target).closest("li");
        listItem.find(".dropdown__projects-list").slideToggle();
        $(event.target).toggleClass("active");
        const cat = $(event.target).text().trim();
        setDropdownActive((prev) => ({
          ...prev,
          [cat]: !prev[cat],
        }));
      }
    };

    $(".dropdown__accordion").on("click", handleClick);
    return () => {
      $(".dropdown__accordion").off("click", handleClick);
    };
  }, []);

  // Extraer categorías dinámicas desde JSON
  const categoriasJSON = Array.from(new Set(projectsJSON.map((p) => p.carpeta)));

  // Evitar duplicar categorías hardcodeadas si las tienes
  const categoriasADisplay = categoriasJSON.filter(
    (cat) => !["Diseño UX/UI", "Diseño gráfico", "Diseño sonoro"].includes(cat)
  );

  return (
    <div className="dropdown__container">
      <ul className="dropdown__accordion">

        {/* Categorías dinámicas desde JSON */}
        {categoriasADisplay.map((cat) => {
          const proyectos = projectsJSON.filter((p) => p.carpeta === cat);

          return (
            <li key={cat}>
              <div
                className={`h5 dropdown__category ${dropdownActive[cat] ? "active" : ""}`}
              >
                {cat}
                <span className="dropdown__icon"></span>
              </div>

              <ul
                className="text-default dropdown__projects-list"
                style={{ display: dropdownActive[cat] ? "block" : "none" }}
              >
                {proyectos.map((proj) => (
                  <Link to={`/${proj.carpeta}`} className="link" key={proj.carpeta}>
                    <li className="dropdown__project-item">
                      <span className="dropdown__project-title">{proj.title}</span>
                      <span className="dropdown__project-typology">{proj.typology}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
