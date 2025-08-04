import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Resume from "./Pages/Resume/Resume";
import About from "./Pages/About/About";
import { DeveloperContext, developerData } from "./Context/DeveloperContext";

function App() {
  return (
    <DeveloperContext.Provider value={developerData}>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </DeveloperContext.Provider>
  );
}

export default App;
