import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import About from './pages/About';
import WorkExperience from './pages/WorkExperience';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/skills" element={<Skills />} />
          <Route path="/portfolio/experience" element={<WorkExperience />} />
          <Route path="/portfolio/contact" element={<Contact />} />
          {/* Universal Details Route */}
          <Route path="/portfolio/details/:type/:id" element={<Details />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
