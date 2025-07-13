import './Home.css';

import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import { Skills } from '../Skills/Skills';
import { Service } from '../Service/Service';
import { Project } from '../Project/Project';
import { Education } from '../Education/Education';
import { Contact } from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
    <div className='line-hr'></div>
    <div id="home">
      <div>
        <About />
      </div>

      <div>
        <Skills />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
       </div>
    </div>
  )
}

export default Home;
