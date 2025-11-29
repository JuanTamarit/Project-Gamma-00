import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./scss/global.scss";

import Home from "./views/home/Home";
import Contact from "./views/contact/Contact";
import Styleguide from "./styleguide/Styleguide";
import Portfolio from "./views/portfolio/Portfolio";

import Modelproject from "./views/projects/Modelproject";
import Maslow from "./views/projects/Maslow";
import Jazzing from "./views/projects/Jazzing";
import Infografia from "./views/projects/Infografia";
import Ilustraciones from "./views/projects/Ilustraciones";
import Editorial from "./views/projects/Editorial";
import Packaging from "./views/projects/Packaging";
import Animacion from "./views/projects/Animacion";
import Sonido from "./views/projects/Sonido";
import Maslowui from "./views/projects/Maslowui";
import ProjectTemplate from "./views/projects/ProjectTemplate";
import PlantillaProyecto from "./views/projects/PlantillaProyecto";

import projects from "./data/projects.json";

function App() {
  return (
    <main className="text-default">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/styleguide" element={<Styleguide />} />
        <Route path="/portafolio" element={<Portfolio />} />
        <Route path="/modelproject" element={<Modelproject number="00" />} />
        <Route path="/jazzing" element={<Jazzing number="04" />} />
        <Route path="/maslow" element={<Maslow number="05" />} />
        <Route path="/maslowweb" element={<Maslowui number="01" />} />
        <Route path="/infografia" element={<Infografia number="06" />} />
        <Route path="/ilustraciones" element={<Ilustraciones number="03" />} />
        <Route path="/editorial" element={<Editorial number="07" />} />
        <Route path="/packaging" element={<Packaging number="08" />} />
        <Route path="/animacion" element={<Animacion number="09" />} />
        <Route path="/sonido" element={<Sonido number="10" />} />
        <Route path="/ProjectTemplate" element={<ProjectTemplate number="11" />} />

        {/* Ruta dinámica para proyectos desde JSON */}
        <Route
          path="/:carpeta"
          element={<PlantillaProyecto projects={projects} />}
        />
      </Routes>
    </main>
  );
}

export default App;
