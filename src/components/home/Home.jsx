import './../home/Home.css';

import Navbar from './../navbar/Navbar';
import About from './../../components/about/About';
import { Skill } from './../../components/skill/skill';
import { Service } from './../../components/service/Service';
import { Project } from './../../components/project/Project';
import { Education } from './../../components/education/Education';
import { Contact } from './../../components/contact/Contact';
import Footer from './../../components/footer/Footer';

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
        <Skill />
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
