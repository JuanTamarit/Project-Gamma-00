import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import $ from "jquery";
import { Link } from "react-router-dom";
import projectsJSON from "/Users/juantamaritvalls/Documents/KIRON/Project-Gamma-00/src/data/projects.json";

import "./dropdown.scss";

function Dropdown() {
  const [dropdownActive, setDropdownActive] = useState({});
  const location = useLocation();

  // Cerrar todos los desplegables al cambiar de ubicación
  useEffect(() => {
    setDropdownActive({});
  }, [location]);

  // Manejar apertura/cierre de categorías
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

  // Categorías dinámicas desde JSON
  const categoriasJSON = Array.from(
    new Set(projectsJSON.map((p) => p.carpeta))
  );

  // Evitar duplicar categorías hardcodeadas
  const categoriasADisplay = categoriasJSON.filter(
    (cat) => !["Diseño UX/UI", "Diseño gráfico", "Diseño sonoro"].includes(cat)
  );

  return (
    <div className="dropdown__container">
      <ul className="dropdown__accordion">
        {/* Categoría hardcodeada UX/UI */}
        <li>
          <div
            className={`h5 dropdown__category ${
              dropdownActive["Diseño UX/UI"] ? "active" : ""
            }`}
          >
            Diseño UX/UI<span className="dropdown__icon"></span>
          </div>
          <ul
            className="text-default dropdown__projects-list"
            style={{
              display: dropdownActive["Diseño UX/UI"] ? "block" : "none",
            }}
          >
            <Link to="/modelproject" className="link">
              <li>
                <span>Sobre este portafolio</span>
                <span>Web, UX</span>
              </li>
            </Link>
            <Link to="/maslowweb" className="link">
              <li>
                <span>Maslow</span>
                <span>Web, UI</span>
              </li>
            </Link>
          </ul>
        </li>

        {/* Categoría hardcodeada Diseño gráfico */}
        <li>
          <div
            className={`h5 dropdown__category ${
              dropdownActive["Diseño gráfico"] ? "active" : ""
            }`}
          >
            Diseño gráfico<span className="dropdown__icon"></span>
          </div>
          <ul
            className="text-default dropdown__projects-list"
            style={{
              display: dropdownActive["Diseño gráfico"] ? "block" : "none",
            }}
          >
            <Link to="/ilustraciones" className="link">
              <li>
                <span>Proyectos experimentales</span>
                <span>Ilustración</span>
              </li>
            </Link>
            <Link to="/jazzing" className="link">
              <li>
                <span>Jazzing Festival</span>
                <span>Identidad</span>
              </li>
            </Link>
            <Link to="ProjectTemplate" className="link">
              <li>
                <span>Project Template</span>
                <span>Identidad</span>
              </li>
            </Link>
            <Link to="/maslow" className="link">
              <li>
                <span>Maslow</span>
                <span>Identidad</span>
              </li>
            </Link>
            <Link to="/infografia" className="link">
              <li>
                <span>Cartel pedagógico</span>
                <span>Infografía</span>
              </li>
            </Link>
            <Link to="/editorial" className="link">
              <li>
                <span>Proyecto de Maquetación</span>
                <span>Editorial</span>
              </li>
            </Link>
            <Link to="/packaging" className="link">
              <li>
                <span>Diseño de un CD</span>
                <span>Packaging</span>
              </li>
            </Link>
            <Link to="/animacion" className="link">
              <li>
                <span>Retrato animado</span>
                <span>Animación</span>
              </li>
            </Link>
          </ul>
        </li>

        {/* Categoría hardcodeada Diseño sonoro */}
        <li>
          <div
            className={`h5 dropdown__category ${
              dropdownActive["Diseño sonoro"] ? "active" : ""
            }`}
          >
            Diseño sonoro<span className="dropdown__icon"></span>
          </div>
          <ul
            className="text-default dropdown__projects-list"
            style={{
              display: dropdownActive["Diseño sonoro"] ? "block" : "none",
            }}
          >
            <Link to="/sonido" className="link">
              <li>
                <span>Piezas pequeñas</span>
                <span>Diseño sonoro</span>
              </li>
            </Link>
          </ul>
        </li>

        {/* Categorías dinámicas desde JSON */}
        {categoriasADisplay.map((cat) => {
          const proyectos = projectsJSON.filter((p) => p.carpeta === cat);
          return (
            <li key={cat}>
              <div
                className={`h5 dropdown__category ${
                  dropdownActive[cat] ? "active" : ""
                }`}
              >
                {cat}
                <span className="dropdown__icon"></span>
              </div>
              <ul
                className="text-default dropdown__projects-list"
                style={{
                  display: dropdownActive[cat] ? "block" : "none",
                }}
              >
                {proyectos.map((proj) => (
                  <Link to={proj.carpeta} className="link" key={proj.titulo}>
                    <li>
                      <span>{proj.titulo}</span>
                      <span>{proj.tipo}</span>
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
