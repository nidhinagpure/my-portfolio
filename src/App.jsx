import './../src/App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Service from './components/service/Service';
import Project from './components/project/Project';
import Education from './components/education/Education'
import Contact from './components/contact/Contact';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Skill" element={<Skill />} />
      <Route path="/service" element={<Service />} />
      <Route path="/project" element={<Project />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App;
