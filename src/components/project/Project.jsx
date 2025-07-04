import './../project/Project.css';
import Heading from './../../components/headingname/Heading';
import React, { useState } from 'react';

import Github from './../../assets/footer/Github.png';
import Vercel from './../../assets/footer/Vercel.png';

import WinnerCard from './../../assets/project/Winner-Card.png';
import Tictactoe from './../../assets/project/Tic-Tac-Toe.png';
import DiceRoller from './../../assets/project/Dice-Roller.png';
import Togglebulb from './../../assets/project/Toggle-Bulb.png';
import PhoneBook from './../../assets/project/Phone-Book.png';
import ProductCard from './../../assets/project/Product-Card.png';


const PROJECT = [
  {
    codein: "In React",
    projectImg: WinnerCard,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/winner-score",
    vercelUrl: "https://score-winner.vercel.app/",
    projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."
  },
  {
    codein: "In React",
    projectImg: Tictactoe,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/Tic-Tac-Toe-Game",
    vercelUrl: "https://tic-tac-toe-game-ten-sand.vercel.app/",
    projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."

  },

  {
    codein: "In Iavascript",
    projectImg: DiceRoller,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/diabox",
    vercelUrl: "https://dice-roller-liart.vercel.app/",
    projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."

  },

  {
    codein: "In Iavascript",
    projectImg: Togglebulb,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/bulb",
    vercelUrl: "https://bulb-toggler-7b6q.vercel.app/",
    projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."

  },
  {
    codein: "In Iavascript",
    projectImg: PhoneBook,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/ContactBookHere",
    vercelUrl: "https://add-remove-content.vercel.app/",
    projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."

  },
  {
    codein: "In Iavascript",
    projectImg: ProductCard,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/products",
    vercelUrl: "https://products-omega-liart.vercel.app/",
    projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."
  },
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
    <div>
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
