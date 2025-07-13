import './../src/App.css';
import { Routes, Route, } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Service } from './components/Service/Service';
import { Project } from './components/Project/Project';
import { Education } from './components/Education/Education';
import { Contact } from './components/Contact/Contact';


const App = () => {
  return (

<>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/service" element={<Service />} />
      <Route path="/project" element={<Project />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App;
