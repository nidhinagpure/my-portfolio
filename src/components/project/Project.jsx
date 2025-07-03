import './../project/Project.css';
import Heading from './../../components/headingname/Heading';
import { Link } from 'react-router-dom'

import Github from './../../assets/footer/Github.png';
import Vercel from './../../assets/footer/Vercel.png';

import WinnerCard from './../../assets/project/Winner-Card.png';
import Tictactoe from './../../assets/project/Tic-Tac-Toe.png';
import DiceRoller from './../../assets/project/Dice-Roller.png';
import Togglebulb from './../../assets/project/Toggle-Bulb.png';
import PhoneBook from './../../assets/project/Phone-Book.png';
import ProductCard from './../../assets/project/Product-Card.png';


const Project = [
  {
    projectImg: WinnerCard,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/winner-score",
    vercelUrl: "https://score-winner.vercel.app/",
    projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."
  },
  {
    projectImg: Tictactoe,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/Tic-Tac-Toe-Game",
    vercelUrl: "https://tic-tac-toe-game-ten-sand.vercel.app/",
    projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."

  },

  {
    projectImg: DiceRoller,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/diabox",
    vercelUrl: "https://dice-roller-liart.vercel.app/",
    projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."

  },

  {
    projectImg: Togglebulb,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/bulb",
    vercelUrl: "https://bulb-toggler-7b6q.vercel.app/",
    projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."

  },
  {
    projectImg: PhoneBook,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/ContactBookHere",
    vercelUrl: "https://add-remove-content.vercel.app/",
    projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."

  },
  {
    projectImg: ProductCard,
    githubImg: Github,
    vercelImg: Vercel,
    githubUrl: "https://github.com/nidhinagpure/products",
    vercelUrl: "https://products-omega-liart.vercel.app/",
    projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."
  },
];


function Projectcard(props) {
  const { projectImg, githubImg, vercelImg, githubUrl, vercelUrl, projectInfo } = props;
  return (
    <>
      <div>
        <img src={projectImg} />
        <p>{projectInfo}</p>
      </div>
      <Link to={githubUrl} target='blank_'>
        <span><img src={githubImg} /></span>
      </Link>
      <Link to={vercelUrl} target='blank_'>
        <span><img src={vercelImg} /></span>
      </Link>
    </>

  );
}

export function Project() {
  return (
    <div>
      <Heading heading="Latests Work" />
      <div>
        {Project.map((card, i) => {
          return (
            <Projectcard key={i}
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
