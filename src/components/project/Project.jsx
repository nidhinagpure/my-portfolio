import './../project/Project.css';

import Github from './../../assets/footer/Github.png';
import Vercel from './../../assets/footer/Vercel.png';

import WinnerCard from './../../assets/project/WinnerCard.png';
import Tictactoe from './../../assets/project/Tic-tac-toe.png';
import DiceRoller from './../../assets/project/Dice-Roller.png';
import Togglebulb from './../../assets/project/Toggle-bulb.png';
import PhoneBook from './../../assets/project/Phone-Book.png';
import ProductCard from './../../assets/project/Product-Card.png';


const Project = [
  {
     projectImg: WinnerCard,
     githubImg: Github,
     vercelImg: Vercel,
     githubUrl: "",
     vercelUrl: "",
     projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."
  },
  {
     projectImg: Tictactoe,
     githubImg: Github,
     vercelImg: Vercel,
     githubUrl: "",
     vercelUrl: "",
     projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."

  },

  {
     projectImg: DiceRoller,
     githubImg: Github,
     vercelImg: Vercel,
     githubUrl: "",
     vercelUrl: "",
     projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."

  },

  {
     projectImg: Togglebulb,
     githubImg: Github,
     vercelImg: Vercel,
     githubUrl: "",
     vercelUrl: "",
     projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."

  },
  {
     projectImg: PhoneBook,
     githubImg: Github,
     vercelImg: Vercel,
     githubUrl: "",
     vercelUrl: "",
     projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."

  }
  {
     projectImg: ProductCard,
     githubImg: Github,
     vercelImg: Vercel,
     githubUrl: "",
     vercelUrl: "",
     projectInfo: "Frontend development is about building the visible part of a website or web app — the part users interact with directly in their browserthe part users interact with directly in their browser."
  },
];


function Projectcard(){
  return(
    <>
     <div>
      <img src={} />
      <p>{projectInfo}</p>
     </div>
     <span><img src={githubImg}/></span>
      <span><img src={vercelImg}/></span>


    </>

  );
}

export function Project(){
  return (
    <div>
      <div>
       
      </div>
      
    </div>
  );
};

export default Project;
