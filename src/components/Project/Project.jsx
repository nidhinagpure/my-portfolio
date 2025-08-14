import './Project.css';
import Heading from '../Headingname/Heading'; 
import { useState } from 'react';

import Github from './../../assets/footer/github.png';
import Vercel from './../../assets/footer/Vercel.png';

import WinnerCard from './../../assets/project/Winner-Card.png';
import Togglebulb from './../../assets/project/Toggle-Bulb.png';
import student from './../../assets/project/student.png';
import troonflix from './../../assets/project/troonflix.png';
import todoapp from './../../assets/project/todoapp.png';
import healthcare from './../../assets/project/healthcare.png';


const PROJECT = [
  {
    projectImg: troonflix,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/troon-flix",
    vercelUrl: "https://troon-flix-client.onrender.com/",
  },
  {
    projectImg: healthcare,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/healthcare",
    vercelUrl: "https://healthcare-zq77.onrender.com/",
  },
  {
    projectImg: WinnerCard,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/winner-score",
    vercelUrl: "https://score-winner.vercel.app/",
  },
  
  {
    projectImg: student,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/students-client",
    vercelUrl: "https://students-client-9rho.onrender.com/",
  },
  {
    projectImg: todoapp,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/to-do-app",
    vercelUrl: "https://to-do-app-phi-roan.vercel.app/",
  },

  {
    projectImg: Togglebulb,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/bulb",
    vercelUrl: "https://bulb-toggler-7b6q.vercel.app/",
  }
  
];


function Projectcard(props) {
  const [isGitHover, setIsGitHover] = useState(false);
  const [isVercelHover, setIsVercelHover] = useState(false);

  const { codein,
    projectImg,
    githubImg,
    vercelImg,
    githubUrl,
    vercelUrl,
    projectInfo } = props;

  
  return (
    <>
      <div className='project-container'>
        <img src={projectImg} />
        <div className='project-info'>
          <h2>{codein}</h2>
          <p>{projectInfo}</p>
        </div>

        <div className="link-container">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsGitHover(true)}
            onMouseLeave={() => setIsGitHover(false)}
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px", // space between icon and text
              marginRight: "20px", // optional: spacing between links
            }}>
            <img src={githubImg} alt="GitHub" />
            <span  
            onMouseEnter={() => setIsGitHover(true)}
            onMouseLeave={() => setIsGitHover(false)} 
             style={{
              color: isGitHover ? "blue" : "white",
             }}>Repo</span>
          </a>

          <a
            href={vercelUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsVercelHover(true)}
            onMouseLeave={() => setIsVercelHover(false)}
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}>
            <img src={vercelImg} alt="Vercel" />
            <span  
            onMouseEnter={() => setIsVercelHover(true)}
            onMouseLeave={() => setIsVercelHover(false)} 
             style={{
              color: isVercelHover ? "blue" : "white",
             }}>Demo</span>
          </a>
        </div>

      </div>

    </>

  );
}

export function Project() {
  return (
    <div id="project">
      <Heading heading="My Work" />
      <div className='Project-mapping'>
        {PROJECT.map((card, i) => {
          return (
            <Projectcard key={i}
              codein={card.codein}
              projectImg={card.projectImg}
              githubImg={card.githubImg}
              vercelImg={card.vercelImg}
              githubUrl={card.githubUrl}
              vercelUrl={card.vercelUrl}
              projectInfo={card.projectInfo}
            />);
        })
        }
      </div>
    </div>
  );
};

export default Project;
