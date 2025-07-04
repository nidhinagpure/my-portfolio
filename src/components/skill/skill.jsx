import './../skill/Skill.css';
import Heading from './../../components/headingname/Heading';

import Html from './../../assets/skills/Html.png';
import Css from './../../assets/skills/Css.png';
import Javascript from './../../assets/skills/Javascript.png';
import Tailwind from './../../assets/skills/Tailwind.png';
import Reactjs from './../../assets/skills/React.png';
import Nodejs from './../../assets/skills/Node.png';
import Expressjs from './../../assets/skills/Express.png';
import Mongodb from './../../assets/skills/Mongodb.png';

const SKILLS = [
  {
    image: Html,
    skillName: "HTML",
  },
  {
    image: Css,
    skillName: "CSS",
  },
  {
    image: Javascript,
    skillName: "JAVASCRIPT",
  },
  {
    image: Tailwind,
    skillName: "TAILWIND",
  },
  {
    image: Reactjs,
    skillName: "REACT",
  },
  {
    image: Nodejs,
    skillName: "NODE",
  },
  {
    image: Expressjs,
    skillName: "EXPRESS",
  },
  {
    image: Mongodb,
    skillName: "MONGODB",
  },
];


function Skillcards(props) {
  const { image, skillName } = props;
  return (
      <div className='skill-container'>
        <div className='skill-box'>
          <img src={image} />
          <p>{skillName}</p>
        </div>
      </div>
  )
};


export function Skill() {
  return (
    <> 
    <div id="skill">
        <Heading heading="My Skills" />
      <div className='skill-mapping'>
        {SKILLS.map((card, i) => {
          return (
            <Skillcards key={i}
              image={card.image}
              skillName={card.skillName} />
          )
        })
        }
      </div>
      </div>
      </>
  );
}