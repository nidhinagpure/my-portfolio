
import './../education/Education.css';
import Heading from './../../components/headingname/Heading';

import Location from './../../assets/project/Location.png';


const EDUCATION = [
  {
    filed: "MCA(Master of Computer Applications)",
    dgreeName:"Postgraduate",
    nameOfCollege: "G. H. Raisoni College of Engineering",
    percentage:"CGPA -7.86%",
    location: "Nagpur",
    iconloc: Location,
  },
  {
    filed: "BCCA(Bachelor of Commerce in Computer Applications)",
    dgreeName:"Undergraduate",
    nameOfCollege: "Rashtrasant Tukadoji maharaj nagpur university",
    percentage: "CGPA-7.47%",
    location: "Nagpur",
    iconloc: Location,
  },
  {
    filed: "HSC (Higher Secondary Certificate)",
    dgreeName:"XII",
    nameOfCollege: "Saraswat Junior College of Science & Commerce",
    percentage:"72.31%",
    location: "Saoner",
    iconloc: Location,
  },
];


function Educationcard(props){
  const { filed,  nameOfCollege, percentage, iconloc, location, dgreeName } = props;
  return(
    <>

     <div className='education-container'>
      <h2>{nameOfCollege}</h2>
       <h3>{dgreeName}</h3>
       <p>{filed}</p>
      <p>{percentage}</p>
      <div className='eduction-loction'>
        <span><img src={iconloc} alt="Location Icon" /> {location}</span>
      </div>
      

     </div>

    </>
  )
}


export function Education(){
  return (
    <>
    <div>
         <Heading heading="My Journey"/>
    </div>
    <div className='education-mapping'>
      {EDUCATION.map((card,i)=>{
        return (
         <Educationcard key={i}
          dgreeName={card.dgreeName}
          filed={card.filed}
          nameOfCollege={card.nameOfCollege}
          percentage={card.percentage}
          iconloc={card.iconloc}
          location={card.location}
        />)
        })
      } 

    </div>
    
    
    </>
  )
}

export default Education;
