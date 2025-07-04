import './../home/Home.css';

import { Skill } from './../../components/skill/skill';
import { Service } from './../../components/service/Service';
import { Project } from './../../components/project/Project';
import { Education } from './../../components/education/Education';
import { Contact } from './../../components/contact/Contact';

import Navbar from './../navbar/Navbar';
import Heading from './../headingname/Heading';
import Profileimg from './../../assets/Profile-img.jpg';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='line-hr'></div>
      <Heading heading ="About Me"/>

      <div className='home-container'>

        <div className='profile-container'>
          <img src={Profileimg} />

        </div>

        <div className='home-info'>
          <h1>Hello,</h1>
          <h1>I'm Nidhi Nagpure </h1>
          <h2>I'm a <span> Full Stack Developer </span></h2>
          <p>Bridging the gap between design and functionality, I specialize in creating smart, scalable,
            and user-friendly web applications from front to back .</p>
          <div className='btn-resume'>
            <a href="/resume.pdf" download className="btn-outline">My Resume</a>
          </div>
        </div>
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

    </div>
  )
}

export default Home;
